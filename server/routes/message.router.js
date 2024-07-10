import { Router } from "express";
import sendMessage from "../controllers/message.controllers/sendMessage.js";
import validateToken from "../middleware/validateToken.js";
import getMessages from "../controllers/message.controllers/getMessages.js";

const messageRouter = Router();

messageRouter.post("/api/messages/send/:id", validateToken, sendMessage);
messageRouter.get("/api/messages/:id", validateToken, getMessages);

export default messageRouter;
