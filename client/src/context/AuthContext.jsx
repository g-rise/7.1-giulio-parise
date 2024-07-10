import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// ÚLTIM PAS --> creo un hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  // Busqueda en local storage si hi ha un usuari o no
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("auth-user")) || null
  );

  // COMPROVACIÓ PER SOBREESCRITURA DE authUser
  /**
  useEffect(() => {
    console.log("Auth user set to:", authUser);
  }, [authUser]);
   */

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
