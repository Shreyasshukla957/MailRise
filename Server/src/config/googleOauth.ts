import { google } from "googleapis";
import { requiredEnv } from "./env.js";


// this is positional argument.
// this is created so that we don't need to write this logic everytime when communicating with google , this is same as axiosInstance creation : created single time and can communicate without writing multiple times.
export const Oauth2Client = new google.auth.OAuth2(
    requiredEnv.client_id,
    requiredEnv.client_secret,
    requiredEnv.redirect_uris
)