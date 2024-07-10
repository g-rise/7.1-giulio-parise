import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socketio = io("http://localhost:4004", {
        query: {
          userId: authUser.user.id,
        },
      });
      // console.log(authUser.user.username);

      setSocket(socketio);
      // socket.on() s'utilitza tant en el costat del client i del servidor per escoltar esdeveniments
      socketio.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  // COMPROBACIONS
  // console.log(authUser); // COMPROBACIÓ --> tothom mantè el seu authUser
  // console.log("Current localStorage:", localStorage.getItem("auth-user"));

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
