import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../global/useConversation";

const Chat = ({ chat, onSelect }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === chat._id;
  // PER AGAFAR USERS ONLINE
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);

  const handleClick = () => {
    setSelectedConversation(chat);
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-300 rounded-none p-2 py-1 cursor-pointer
      ${isSelected ? "bg-green-700" : ""}`}
        onClick={handleClick}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-16 rounded">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="font-semibold text-black">{chat.username}</p>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Chat;
