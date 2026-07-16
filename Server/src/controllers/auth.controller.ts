import { requiredEnv } from "../config/env.js";
import type { Request, Response } from "express"
import { Oauth2Client } from "../config/googleOauth.js"
import { google } from "googleapis"
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

interface ResponseBody {
    message: string,
}


export const initiateGoogleLogin = async (req: Request, res: Response<ResponseBody>): Promise<void> => {

    try {

        const scopes = [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/gmail.send",
        ];

        const authUrl = Oauth2Client.generateAuthUrl({
            access_type: "offline", // Request refresh token for background tasks
            prompt: "consent", // ask consent screen to always get refresh token
            scope: scopes, //permissin requested
        });

        res.redirect(authUrl);


    } catch (error) {
        if (error instanceof Error) {
            console.log("Error generating OAuth URL:", error);
            res.status(500).json({
                message: "Failed to initiate Google login",
            });
        }


    }

}

