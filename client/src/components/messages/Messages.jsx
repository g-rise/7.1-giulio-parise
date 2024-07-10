import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMesssages from "../../hooks/useListenMesssages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // COMPROBACIONS
  // console.log(typeof messages);
  // console.log(messages);

  // Hook per rebre els missatges instantaneis
  useListenMesssages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 20);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {/* {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)} */}

      {!loading && messages.length === 0 && (
        <p className="text-center">
          Envia un missatge per començar la conversació
        </p>
      )}
    </div>
  );
};

export default Messages;
