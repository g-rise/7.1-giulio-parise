import { Router } from "express";
import validateToken from "../middleware/validateToken.js";
import getUsers from "../controllers/user.controllers/getUsers.js";

const userRouter = Router();

userRouter.get("/api/users", validateToken, getUsers);

export default userRouter;
