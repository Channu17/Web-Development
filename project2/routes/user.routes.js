import { Router } from "express";
import { currentUser, loginUser, registerUser } from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.post("/current", currentUser);


export default authRouter;