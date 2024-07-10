import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      // console.log(response);

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("auth-user");
      setAuthUser(null);
      toast.success(JSON.stringify(data.message));
      //
    } catch (error) {
      //
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
