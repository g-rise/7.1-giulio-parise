import express from "express";
import http from "node:http";
import { Server } from "socket.io";

const app = express();

// CREACIÓ SERVER SOCKET.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const userSocketMap = {}; // {userId: socketId}

// Funció que es necessitarà pel real time chat --> recupero el socketId de qui rep el missatge --> go to message.controller > sendMessage.js
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("Usuari connectat", socket.id);

  const userId = socket.handshake.query.userId; // Recullo la id de part del client
  if (userId != "undefined") userSocketMap[userId] = socket.id;
  console.log(userSocketMap);

  // Esdeveniment a enviar a tots els usuaris connectats --> gestió de users online
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // DESCONNEXIÓ
  socket.on("disconnect", () => {
    console.log("Usuari desconnectat", socket.id);
    // Gestió de desconnexió de users online
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io };
