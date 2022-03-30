import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';

const AdminSection = () => {
  const auth = useAuth();
  const realtimeData = useRealtimeData();
  if (auth.currentUser.customClaims.admin)
    return (
      <>
        <NavItem>
          <NavLink to='/dashboard/users'>
            <FontAwesomeIcon icon='users' /><span>Users</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/dashboard/crew'>
            <FontAwesomeIcon icon='user-cog' /><span>Crew</span>
          </NavLink>
        </NavItem>
      </>
    )
  else
    return <></>
}

const SideBar = (props) => {
  return (
    <div
      className="sidebar"
      data-color={props.bgColor || 'light'}
    >
      <div className="sidebar-nav">
        <Nav vertical>
          <AdminSection />
          <NavItem>
            <NavLink to='/dashboard/vehicles'>
              <FontAwesomeIcon icon='truck' /><span>Vehicles</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/dashboard/trips'>
              {/* To make a spinning icon, add: className='fa-spin' */}
              <FontAwesomeIcon icon='shipping-fast' /><span>Trips</span>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div id="sidebar-button">
        <div id='sidebar-arrow'></div>
      </div>
    </div>
  )
}

export default SideBar;
