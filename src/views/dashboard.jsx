import { Outlet } from 'react-router-dom';
import SideBar from '../layout/sideBar';

const Dashboard = () => {
  return (
    <>
      <div id='dashboard-container'>
        <SideBar />
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard;
