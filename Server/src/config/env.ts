
import dotenv from "dotenv"
dotenv.config();

// Centralized Enviornment Variable

const env = ["PORT", "MONGODB_URI", "JWT_SECRET", "Client_Id", "Client_Secret", "Redirect_Uris" , "NODE_ENV"];

export const requiredEnv = {
    "PORT": process.env.PORT || "3000",
    "MONGODB_URI": process.env.MONGODB_URI as string,
    "JWT_SECRET": process.env.JWT_SECRET as string,
    "client_id": process.env.Client_Id as string,
    "client_secret": process.env.Client_Secret as string,
    "redirect_uris": process.env.Redirect_Uris as string,
    "NODE_ENV":process.env.NODE_ENV as string,
}

env.forEach((env) => {
    if (!process.env[env]) {
        throw new Error(`Variable ${env} is missing`);
    }
})
