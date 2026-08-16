import { requiredEnv } from "./config/env.js"
import express from "express"
import { CallDB } from "./config/db.js"
import cookieParser from "cookie-parser";
import type { Request, Response } from "express";
import { User } from "./models/User.js";
import authRouter from "./routes/auth.routes.js";
import emailRouter from "./routes/email.routes.js";
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use("/auth",authRouter);
app.use("/email",emailRouter);


const Server = async (): Promise<void> => {

    try {

        await CallDB();
        console.log("DB Connection Established");
        app.listen(requiredEnv.PORT, () => {
            console.log("Server started Listening at Port");
        })
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }


}

Server();





