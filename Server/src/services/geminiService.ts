import { GoogleGenAI } from "@google/genai";
import { requiredEnv } from "../config/env.js";

export const ai = new GoogleGenAI({apiKey:requiredEnv.GEMINI_API});
