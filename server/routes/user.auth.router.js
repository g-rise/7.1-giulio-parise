import { Router } from "express";
import registerUser from "../controllers/user.auth.controllers/registerUser.js";
import loginUser from "../controllers/user.auth.controllers/loginUser.js";
import logoutUser from "../controllers/user.auth.controllers/logoutUser.js";
import validateToken from "../middleware/validateToken.js";

const userAuthRouter = Router();

userAuthRouter.post("/api/register", registerUser);
userAuthRouter.post("/api/login", loginUser);
userAuthRouter.post("/api/logout", validateToken, logoutUser);

export default userAuthRouter;
