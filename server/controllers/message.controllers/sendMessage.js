import ChatModel from "../../models/chat.model.js";
import MessageModel from "../../models/message.model.js";
import { getReceiverSocketId, io } from "../../socket/socket.js";

const sendMessage = async (request, response) => {
  try {
    const { id: receiver } = request.params;
    const { message } = request.body;

    const sender = request.userId; // Parametre rebut del validateToken

    let chat = await ChatModel.findOne({
      participants: { $all: [sender, receiver] },
    });

    if (!chat) {
      chat = await ChatModel.create({
        participants: [sender, receiver],
      });
    }

    const payload = {
      sender,
      receiver,
      message,
    };
    console.log(payload);

    const newMessage = await MessageModel(payload);

    if (!newMessage) {
      return response.status(400).json({
        error: "No s'ha pogut enviar el missatge",
      });
    }
    chat.messages.push(newMessage._id);

    // ARA CORREN EN PAREL·LEL
    await Promise.all([chat.save(), newMessage.save()]);
    // await chat.save();
    // await newMessage.save();

    // ---> SOCKET.IO
    const receiverSocketId = getReceiverSocketId(receiver);
    // console.log(receiverSocketId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage); // --> Ara s'ha de capturar el missatge en el client > creació de un nou hook
    }

    return response.status(201).json(newMessage);
  } catch (error) {
    console.log("Error en enviar el missatge", error.error);
    return response.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

export default sendMessage;
