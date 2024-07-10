// PACKAGE IMPORTS
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";

import connectDB from "./config/connectDB.js";

import userAuthRouter from "./routes/user.auth.router.js";
import messageRouter from "./routes/message.router.js";
import userRouter from "./routes/user.router.js";

dotenv.config();

const PORT = process.env.PORT || 4004;

app.use(express.json());
app.use(cookieParser());

app.use("/", userAuthRouter);
app.use("/", messageRouter);
app.use("/", userRouter);

// Forma mès eficient per iniciar
server.listen(PORT, () => {
  connectDB();
  console.log(`Server runnning on port ${PORT}`);
});

// connectDB().then(() => {
//   server.listen(PORT, () => {
//     console.log(`Server runnning on port ${PORT}`);
//   });
// });
