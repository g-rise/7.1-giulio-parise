import { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);

    setMessage("");
  };

  return (
    <form className="px-4 my-4" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-none block w-full p-2.5 bg-slate-200 border-gray-800 "
          placeholder="Envia un missatge"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-2"
        >
          <RiSendPlane2Fill className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
