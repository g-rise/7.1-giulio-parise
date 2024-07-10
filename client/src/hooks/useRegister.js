import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

// HOOK a utilitzar en la page de register
const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ firstname, lastname, username, email, password }) => {
    // Comprovo que les dades hagin estat insertades d'una forma correcta
    const success = handleInputErrors({
      firstname,
      lastname,
      username,
      email,
      password,
    });

    if (!success) return;

    setLoading(true);
    try {
      // Fetch al END POINT del BackEND
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
        }),
      });

      // Recullo les dades del fetch
      const data = await response.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      // LOCALSTORAGE  --> Rebem les dades del backend i les almacenem en el local storage
      localStorage.setItem("auth-user", JSON.stringify(data));
      // CONTEXT
      setAuthUser(data);
      toast.success(JSON.stringify(data.message));

      //
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useRegister;

function handleInputErrors({ firstname, lastname, username, email, password }) {
  if (!firstname) {
    toast.error("És obligatori incloure un nom");
    return false;
  }
  if (!lastname) {
    toast.error("És obligatori incloure els cognoms");
    return false;
  }
  if (!username) {
    toast.error("És obligatori incloure un username vàlid");
    return false;
  }
  if (!email) {
    toast.error("És obligatori incloure un email vàlid");
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
