import { useEffect, useState } from "react";
import useConversation from "../global/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();

  // UTILITZEM UN useEffect perquè ha de correr inmediatament
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `/api/messages/${selectedConversation._id}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
