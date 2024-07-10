import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    // Comprovació errors de frontend
    const success = handleInputErrors(username, password);
    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("auth-user", JSON.stringify(data));
      // console.log("LocalStorage set with:", JSON.stringify(data)); // COMPROVACIÓ
      setAuthUser(data);
      // console.log("Auth user set to:", data); // COMPROVACIÓ
      toast.success(JSON.stringify(data.message));

      // Si no es troben errors es pot entrar en el authContext
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
  if (!username) {
    toast.error("És obligatori incloure un username vàlid");
    return false;
  }

  if (!password) {
    toast.error("És obligatori incloure el password");
    return false;
  }

  if (password.length < 3) {
    toast.error("La password ha de tenir com a mínim tres caracters");
    return false;
  }

  return true;
}
