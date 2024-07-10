import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const chatSchema = new Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ChatModel = model("chat", chatSchema);

export default ChatModel;
