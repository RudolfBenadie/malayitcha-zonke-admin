import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const SideBar = (props) => {
  return (
    <div
      className="sidebar"
      data-color={props.bgColor || 'light'}
    >
      <div className="sidebar-nav">
        <Nav vertical>
          <NavItem>
            <NavLink to='/dashboard/vehicles'>
              <FontAwesomeIcon icon='truck' /><span>Vehicles</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/dashboard/users'>
              <FontAwesomeIcon icon='users' /><span>Users</span>
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to='/dashboard/reservations'>
              <FontAwesomeIcon icon='truck' /><span>Reservations</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/dashboard/schedules'>
              //To make a spinning icon, add: className='fa-spin'
              <FontAwesomeIcon icon='shipping-fast' /><span>Scheduled trips</span>
            </NavLink>
          </NavItem> */}
        </Nav>
      </div>
      <div id="sidebar-button">
        <div id='sidebar-arrow'></div>
      </div>
    </div>
  )
}

export default SideBar;
