import mongoose, { Schema, Document } from "mongoose";

type IStatus = "success" | "failed" | "draft";

interface IHistory extends Document {

    userId: mongoose.Types.ObjectId,
    tone: "casual" | "formal" | "professional",
    prompt: {
        role: "user" | "model",
        message: string,
    }[],
    emailData: {
        userMail: string,
        recipient: string,
        subject: string,
        body: string,

    }[],
    status: IStatus

}


const HistorySchema = new Schema<IHistory>({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    tone: {
        type: String,
        enum: ["casual", "formal", "professional"],
        required: true,
    },
    prompt: [
        {
            role: {
                type: String,
                enum: ["user", "model"],
                required: true,
            },
            message: {
                type: String,
                required: true,
            }
        }
    ],
    emailData: [
        {
            userMail: {
                type: String,
                required: true,

            }, recipient: {
                type: String,
                required: true,

            }, subject: {
                type: String,
                required: true,

            }, body: {
                type: String,
                required: true,
            }
        }

    ],
    status: {
        type: String,
        enum: ["success", "failed", "draft"],
        default: "draft",
    }


}, { timestamps: true })


export const History = mongoose.model<IHistory>("history", HistorySchema);