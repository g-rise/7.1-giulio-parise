import Chats from "./Chats";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-s-slate-800 flex flex-col p-3">
      <div className="divider divider-neutral">XATS</div>
      <Chats />
      <LogoutButton className="absolute inset-x-0 bottom-0" />
    </div>
  );
};

export default Sidebar;
