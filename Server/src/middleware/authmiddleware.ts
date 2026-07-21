import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import { requiredEnv } from "../config/env.js";
import { User } from "../models/User.js";

interface ResponseBody {
    message: string;
}

interface JwtPayload {
    userId: string;
    emailId?: string;

}


export const authMiddleware = async (req: Request, res: Response<ResponseBody>, next: NextFunction) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, requiredEnv.JWT_SECRET) as JwtPayload;

        if (!decoded.userId) {
            return res.status(401).json({ message: "User not found" });
        }

        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = user;

        next();

    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "Internal Server Error" })
    }
}