import Sidebar from '../components/Dashboard/Sidebar';
import MainContent from '../components/Dashboard/MainContent';
import Notification from '../components/Dashboard/Notification';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Notification />
        <MainContent />
      </div>
    </div>
  );
};

export default DashboardPage;
