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


interface RegisterQuery {
    code: string
}

export const handleGoogleCallBack = async (req: Request<{}, {}, {}, RegisterQuery>, res: Response<ResponseBody>): Promise<void> => {

    try {

        // we got the code from the googleUrl
        const { code } = req.query;

        if (!code) {
            res.status(400).json(({
                message: "Authorization Code is Missing",
            }))
            return;
        }

        // now exchanging the code for google token
        const { tokens } = await Oauth2Client.getToken(code);
        // inserting tokens inside Outh2Client.credentials{tokens}
        Oauth2Client.setCredentials(tokens);

        // Fetching user profile details from Google Directory API
        const ouath2 = google.oauth2({ version: "v2", auth: Oauth2Client });
        // now data is set with new name called profile and now this profile will hold user data profile.name , profile.id , profile.email etc...
        const { data: profile } = await ouath2.userinfo.get();

        if (!profile.id) {
            res.status(400).json({ message: "Invalid Profile" })
            return;
        }

        let user = await User.findOne({ googleid: profile.id });

        const updated_data: Record<string, any> = {
            profilepicture: profile.picture || "",
        }

        if (tokens.refresh_token) {
            updated_data.refreshtoken = tokens.refresh_token;
        }

        if (!user) {
            user = await User.create({
                googleid: profile.id || "",
                name: profile.name || "",
                emailId: profile.email || "",
                profilepicture: profile.picture || "",
                refreshtoken: tokens.refresh_token || "",
            });
        }
        else {
            user = await User.findOneAndUpdate(
                { googleid: profile.id }, updated_data, { new: true, runValidators: true }
            )
        }


        const token = jwt.sign(
            { userId: user?.id, emailId: user?.emailId }, requiredEnv.JWT_SECRET, { expiresIn: "3d" }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: requiredEnv.NODE_ENV === "production", //https only when deployed
            sameSite: requiredEnv.NODE_ENV === "production" ? "none" : "lax", // allowing to talk cross domain , since front-end will be hosted in vercel and backend in render . therefore in production none along with secure : true . so cross domain data / cookie exchange but only with https website so no fishy can attack .
            maxAge: 3 * 24 * 60 * 60 * 1000,
        })

        res.redirect("http://localhost:5173/dashboard");



    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get user data ",
        });
        if (error instanceof Error) {
            console.log("Error for getting user data", error);

        }

    }
}






export const UserProfile = async (req: Request, res: Response) => {

    try {


        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { name,
            emailId,
            profilepicture } = req.user;

        const data = {
            name,
            emailId,
            profilepicture
        }

        res.status(200).json({ message: "User Profile", data });

    }

    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }


}


export const logout = async (req: Request, res: Response<ResponseBody>) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        res.clearCookie("token", {
            httpOnly: true,
            maxAge: 0,
            secure: requiredEnv.NODE_ENV === "production",
            sameSite: requiredEnv.NODE_ENV === "production" ? "none" : "lax",
        });

        res.status(200).json({
            message:"Logged out Successfully."
        })
    }
    catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

