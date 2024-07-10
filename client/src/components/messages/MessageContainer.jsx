import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../global/useConversation";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Per no tenir la ultima xat oberta si després del logout torno a entrar
  useEffect(() => {
    // Cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-200 px-4 py-2 mb-1">
            <span className="label-text">Conversació amb: </span>{" "}
            <span className="text-black font-semibold">
              {selectedConversation.username}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="px-5 text-center sm:text-lg md:text-xl  text-black font-medium flex flex-col items-center gap-2"></div>
      <h2 className="py-4 text-2xl">ESPAI PERSONAL</h2>
      <p>Selecciona un chat per començar a enviar missatges</p>
    </div>
  );
};
