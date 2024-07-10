import { AiOutlineLogout } from "react-icons/ai";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-2 mr-auto ml-auto">
      <button type="button" className="btn btn-square bg-slate-800 text-white">
        <AiOutlineLogout className="w-6 h-6 outline-none" onClick={logout} />
      </button>
    </div>
  );
};

export default LogoutButton;
