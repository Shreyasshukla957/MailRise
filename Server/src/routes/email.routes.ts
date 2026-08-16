import { Router } from "express";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { generateEmail } from "../controllers/email.controller.js";
import { sendEmail } from "../controllers/email.controller.js";


const emailRouter: Router = Router();

emailRouter.post("/draft",authMiddleware, generateEmail);
emailRouter.post("/send",authMiddleware,sendEmail);

export default emailRouter;