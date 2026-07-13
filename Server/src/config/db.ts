import mongoose from "mongoose"
import { requiredEnv } from "./env.js"

async function connectDb() {

    try {

        await mongoose.connect(requiredEnv.MONGODB_URI);


    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }

}


export async function CallDB (){
    await connectDb();
}