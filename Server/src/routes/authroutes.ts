import { Router } from "express"
import { initiateGoogleLogin , handleGoogleCallBack} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { UserProfile } from "../controllers/auth.controller.js";
const authRouter: Router = Router();

// for redirecting user to the google
authRouter.get("/google", initiateGoogleLogin);

// for token exchange
authRouter.get("/google/callback", handleGoogleCallBack);

// for user profile when entering the app
authRouter.get("/me",authMiddleware,UserProfile);

export default authRouter;