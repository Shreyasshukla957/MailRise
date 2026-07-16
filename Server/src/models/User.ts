
import mongoose, { Schema, Document } from "mongoose";

interface IUserData extends Document {

    googleid: string,
    name: string,
    emailId: string,
    profilepicture: string,
    refreshtoken:string,


}


const UserSchema = new Schema<IUserData>({

    googleid: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        unique: true,
    },
    profilepicture: {
        type: String
    },
    refreshtoken:{
        type:String,
        default:null,
    }


},{timestamps:true});


export const User = mongoose.model<IUserData>("user",UserSchema);
