import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

// reactstrap components
import HomePage from "./homePage";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="view">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
