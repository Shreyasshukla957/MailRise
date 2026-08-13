import nodemailer from "nodemailer";
import { requiredEnv } from "../config/env.js"

interface DispatchMailProps {
    userEmail: string;
    refreshtoken: string;
    access_token: string;
    recipient: string;
    subject: string;
    body: string;
}

export const DispatchMail = async ({ userEmail: emailId, refreshtoken, access_token, recipient, subject, body, }: DispatchMailProps) => {


    try {

        // Creating Transporter to build connection using Google Oauth.
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: emailId,
                clientId: requiredEnv.client_id,
                clientSecret: requiredEnv.client_secret,
                refreshToken: refreshtoken,
                accessToken: access_token,
            }
            
        });

        // Sending Email
        const MailOptions = {
            from:emailId,
            to:recipient,
            subject:subject,
            text:body,
        }

        const info = await transporter.sendMail(MailOptions);

        return info;



    }
    catch (error) {
        console.error("Dispatch Mail Service Error:", error);
        throw error;
    }
}