import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-none overflow-hidden bg-slate-50">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Dashboard;
