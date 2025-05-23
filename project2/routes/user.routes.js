import { Router } from "express";
import { currentUser, loginUser, registerUser } from "../controllers/auth.controller.js";
import validateToken from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.post("/current",validateToken, currentUser);


export default authRouter;