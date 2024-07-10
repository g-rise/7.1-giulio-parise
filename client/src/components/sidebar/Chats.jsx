import Chat from "./Chat";
import useGetChats from "../../hooks/useGetChats";
import { useState } from "react"; // IMPL-search

const Chats = () => {
  const { loading, chats } = useGetChats();
  const [search, setSearch] = useState("");
  console.log("users: ", chats);

  // IMPL-search
  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
    // filter(e.target.value);
  };

  const handleChatSelect = () => {
    setSearch(""); // Reinicia el valor de search a una cadena vacía
  };

  let results = [];
  if (!search) {
    results = chats;
  } else {
    results = chats.filter((element) => {
      if (
        element.username.toString().toLowerCase().includes(search.toLowerCase())
      ) {
        return element;
      }
    });
  }

  return (
    <>
      <div>
        <form className="flex items-center gap-1 mb-2">
          <input
            type="text"
            placeholder="busca un usuari"
            className="input input-bordered rounded-none w-full"
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="py-2 flex flex-col overflow-auto">
        {results.map((chat) => (
          <Chat key={chat._id} chat={chat} onSelect={handleChatSelect} />
        ))}

        {loading ? (
          <span className="loading loading-spinner mx-auto"></span>
        ) : null}
      </div>
    </>
  );
};

export default Chats;
