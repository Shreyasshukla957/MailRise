import type { Request, Response } from "express"
import { ai } from "../services/geminiService.js"
import { History } from "../models/History.js"
import { User } from "../models/User.js"
import { Oauth2Client } from "../config/googleOauth.js"
import { DispatchMail } from "../services/mailService.js"
import { emailDraftSystemPrompt } from "../prompts/emailDraft.prompt.js";
import validator from "validator";

type Tone = "casual" | "formal" | "professional";
interface RequestBody {
    tone: Tone,
    context: string,
    historyId?: string,
}


export const generateEmail = async (req: Request<{}, {}, RequestBody>, res: Response) => {


    try {

        const { tone, context, historyId } = req.body;

        if (!tone || !context) {
            return res.status(400).json(
                { message: "Tone and context are required" }
            );
        }


        let historyDoc = null;

        if (historyId) {
            // userId se confirm hota h ki user sirf apne hi draft ko edit kar sakta h.
            historyDoc = await History.findOne({ _id: historyId, userId: req.user._id });
        }

        // Current user ki instruction ko tone ke saath Gemini ko dene ke liye prompt banaya h.
        const userPrompt = `Write a ${tone} email. Context: ${context}`;

        // Yeh temporary array sirf Gemini ko previous context bhejne ke liye h, DB me store nahi hota.
        let historyArray: any[] = [];

        // Edit request me hi purane prompts available honge, initial draft me historyDoc null rahega.
        if (historyDoc && historyDoc.prompt) {
            historyDoc.prompt
                // Model ko sirf user ki prompt as a context deni h.
                .filter((item) => item.role === "user")
                // slice(-3) taaki last k index k 3 prompt jaaye woh bhi sirf user k kyunki filter use kiya h.
                .slice(-3)
                .forEach((item) => {
                    // Har selected user prompt Gemini ke expected role/parts format me add ho raha h.
                    historyArray.push({
                        role: "user",
                        parts: [{ text: item.message }],
                    });
                });
        }

        // emailData overwrite hota h, isliye index 0 par hamesha latest saved draft milta h.
        const modelresponse = historyDoc?.emailData?.[0];

        if (modelresponse) {
            // Latest subject/body ko previous model response ki tarah bhej rahe h, edit ko current email ka context milega.
            historyArray.push({
                role: "model",
                parts: [
                    {
                        text: `Subject: ${modelresponse.subject}\nBody: ${modelresponse.body}`,
                    },
                ],
            });
        }

        // Last me current instruction add hoti h, jiske according Gemini latest draft ko create/edit karega.
        historyArray.push({
            role: "user",
            parts: [{ text: userPrompt }]
        })



        // API Call: Passing systemInstruction + contents array
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            config: {
                systemInstruction: emailDraftSystemPrompt,
                responseMimeType: "application/json",
            },
            contents: historyArray,
        });

        // Raw JSON String Output
        const jsonResponseText = response.text;

        if (!jsonResponseText) {
            throw new Error("Invalid Response")
        }

        const data = JSON.parse(jsonResponseText)

        if (historyDoc) {
            // Purane doc me 2 lines PUSH karo aur SAVE kar do (Zero extra loops!):
            historyDoc.prompt.push({ role: "user", message: context });
            historyDoc.prompt.push({ role: "model", message: jsonResponseText });
            historyDoc.emailData = [{
                userMail: (req.user as any)?.emailId || "",
                subject: data?.message?.subject || data?.subject,
                body: data?.message?.body || data?.body,
            }];
            await historyDoc.save();
        } else {
            // Naya document create karo:
            historyDoc = await History.create({
                userId: (req.user as any)?._id,
                tone,
                prompt: [
                    { role: "user", message: userPrompt },
                    { role: "model", message: jsonResponseText }
                ],
                emailData: [{
                    userMail: (req.user as any)?.emailId,
                    subject: data?.message?.subject || data?.subject,
                    body: data?.message?.body || data?.body,
                }],
                status: "draft",
            });
        }

        res.status(200).json({
            historyId: historyDoc._id,
            subject: data?.message?.subject || data?.subject,
            body: data?.message?.body || data?.body,
        });



    } catch (error) {
        console.error("Generate Email Controller Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}

export const workspacedata = async (req: Request, res: Response) => {


    // updateAt:-1 latest laakar dega mujhe draft document , aur userId: req.user._id yeh isiliye likha h taaki jo user logged in h ussi ka draft laakr de kisi aur user ka nahi .
    const data = await History.findOne({ userId: req.user._id, status: "draft" }).sort({ updatedAt: -1 });

    const email = data?.emailData?.[0];

    if (!email) {
        // User ke paas active draft nahi h to workspace empty state ke saath open hoga.
        return res.status(200).json({ draft: null });
    }

    const { body, subject } = email;


    res.status(200).json({
        historyId: data._id,
        body: body,
        subject: subject,
    })


}

export const clearDraft = async (req: Request<{ historyId: string }>, res: Response) => {
    try {
        // userId ke saath delete karne se user sirf apna current draft hi clear kar sakta h.
        const clearedDraft = await History.findOneAndDelete({
            _id: req.params.historyId,
            userId: req.user._id,
            status: "draft",
        });

        if (!clearedDraft) {
            return res.status(404).json({ message: "Draft not found" });
        }

        return res.status(200).json({ message: "Draft cleared" });
    } catch (error) {
        console.error("Clear Draft Controller Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

interface SendEmailBody {

    historyId: string;
    recipient: string;
    subject: string;
    body: string;
}


export const sendEmail = async (req: Request<{}, {}, SendEmailBody>, res: Response) => {

    try {
        const { historyId, recipient, subject, body } = req.body;

        if (!historyId || !recipient || !subject || !body) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = req.user as any;

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { refreshtoken, emailId } = user;

        if (!refreshtoken || !emailId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        Oauth2Client.setCredentials({
            refresh_token: refreshtoken,
        })

        const { token: access_token } = await Oauth2Client.getAccessToken();

        if (!access_token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const data = await DispatchMail({
            userEmail: emailId,
            refreshtoken,
            access_token,
            recipient,
            subject,
            body,

        });

        if (! data || ! data.accepted || data.accepted.length === 0) {
            await History.findByIdAndUpdate(historyId , {status:"failed"} , {runValidators:true , new:true})
            return res.status(400).json({message:"Email wasn't send , problem occured !"});
        }

       const latestdata = await History.findByIdAndUpdate(historyId , {status:"success"} , {runValidators:true , new:true});

        res.status(200).json({
            message:"Email was sent.",
            historyId:latestdata?._id,
            status:latestdata?.status || "success",
        })

    }
    catch (error) {
        console.error("Send Email Controller Error:", error);
        res.status(500).json({ message: "Internal Server Error" });

    }

}