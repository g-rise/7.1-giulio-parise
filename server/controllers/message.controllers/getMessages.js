import ChatModel from "../../models/chat.model.js";

const getMessages = async (request, response) => {
  try {
    const { id: receiver } = request.params;
    const sender = request.userId;

    const chat = await ChatModel.findOne({
      participants: { $all: [sender, receiver] },
    }).populate("messages");
    // console.log(chat);

    if (!chat) {
      const messages = [];
      return response.status(200).json(messages);
    }

    return response.status(200).json(chat.messages);
  } catch (error) {
    console.log("Error en enviar el missatge: ", error);
    return response.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

export default getMessages;
