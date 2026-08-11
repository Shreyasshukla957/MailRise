import { Router } from "express";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { generateEmail } from "../controllers/email.controller.js";


const emailRouter: Router = Router();

emailRouter.post("/draft", generateEmail);

export default emailRouter;