import { useEffect } from "react";

const LocalStorageDebug = () => {
  useEffect(() => {
    console.log("Current localStorage:", localStorage.getItem("auth-user"));
  }, []);

  return null;
};

export default LocalStorageDebug;
