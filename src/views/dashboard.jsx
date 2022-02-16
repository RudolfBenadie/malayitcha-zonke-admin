import { Route, Routes } from 'react-router-dom';
import SideBar from '../layout/sideBar';
import ReservationsPage from './reservationsPage';

const Dashboard = () => {
  return (
    <>
      <div id='dashboard-container'>
        <SideBar />
        <Routes key='dashboard-routes'>
          <Route
            path='/'
            element={
              <ReservationsPage />
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default Dashboard;
