import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../global/useConversation";

const useListenMesssages = () => {
  const { socket } = useSocketContext();
  // const { messages, setMessages } = useConversation();
  const setMessages = useConversation((state) => state.setMessages);
  const messages = useConversation((state) => state.messages);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);

  return null; // Return null if this hook does not render anything
};

export default useListenMesssages;
