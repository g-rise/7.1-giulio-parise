import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../global/useConversation";
import formatTime from "./utilities/timeConverter";

const Message = ({ message }) => {
  const { authUser } = useAuthContext(); // xec si el missatge es meu o de l'altre usuari
  const { selectedConversation } = useConversation();
  const fromMe = message.sender === authUser.user.id; // Xec per revisar si el missatge es meu
  const chatClassName = fromMe ? "chat-end" : "chat-start"; // Per definir en el front si el chat es meu o de l'altre
  const bubbleBgColor = fromMe ? "bg-green-300" : "bg-slate-200"; // Canvi de color del xat
  const formattedTime = formatTime(message.createdAt);
  // console.log(authUser); // Comprovació valors de authUser
  // console.log(message);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-header">
        {fromMe ? "Jo" : `${selectedConversation.username}`}
        {/* <time className="text-xs opacity-50">12:46</time> */}
      </div>
      <div className={`chat-bubble max-w-xs text-black ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer text-xs opacity-50">{formattedTime}</div>
    </div>
  );
};

export default Message;
