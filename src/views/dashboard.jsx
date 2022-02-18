import { Outlet } from 'react-router-dom';
import SideBar from '../layout/sideBar';
import { useAuth } from '../context/AuthContext';
import { useLocation, Navigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user || user.isAnonymous) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />
  } else {
    return (
      <>
        <div id='dashboard-container'>
          <SideBar />
          <Outlet />
        </div>
      </>
    )
  }
}

export default Dashboard;
