import type { Request, Response } from "express"
import { ai } from "../services/geminiService.js"
import { History } from "../models/History.js"
import { User } from "../models/User.js"
import { Oauth2Client } from "../config/googleOauth.js"
import { DispatchMail } from "../services/mailService.js"


const systemPrompt = `
You are a professional email assistant.
Write high-quality email drafts based on the user prompts.
You MUST output your response in this exact JSON format only:
{
  "subject": "Email subject line here",
  "body": "Formatted email body here"
}
Do not write anything else—only raw JSON!
`;

type Tone = "casual" | "formal" | "professional";
interface RequestBody {
    tone: Tone,
    context: string,
    recipient: string,
    historyId?: string,
}


export const generateEmail = async (req: Request<{}, {}, RequestBody>, res: Response) => {


    try {

        const { tone, context, recipient, historyId } = req.body;

        if (!tone || !context || !recipient) {
            return res.status(400).json(
                { message: "Tone, context, and recipient are required" }
            );
        }


        let historyDoc = null;

        if (historyId) {
            historyDoc = await History.findById(historyId);
        }

        const userPrompt = `Write a ${tone} email to ${recipient}. Context: ${context}`;

        let historyArray: any[] = [];

        // historyDoc.prompt yeh bhi true hona chahiye tabhi prompts nikal skte h
        if (historyDoc && historyDoc.prompt) {
            historyDoc.prompt.forEach((item) => {
                historyArray.push({
                    role: item.role,
                    parts: [{ text: item.message }],
                });
            })
        }

        historyArray.push({
            role: "user",
            parts: [{ text: userPrompt }]
        })




        // API Call: Passing systemInstruction + contents array
        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            config: {
                systemInstruction: systemPrompt,
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
                recipient,
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
                    recipient,
                    subject: data?.message?.subject || data?.subject,
                    body: data?.message?.body || data?.body,
                }],
                status: "draft",
            });
        }

        res.status(200).json({
            historyId: historyDoc._id,
            body: data?.message?.body || data?.body,
            subject: data?.message?.subject || data?.subject,
        });



    } catch (error) {
        console.error("Generate Email Controller Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
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