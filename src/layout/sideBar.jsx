// import React, { Component } from 'react'
// import { NavLink } from "react-router-dom";
// import { Nav } from "reactstrap";
// import logo from "../assets/images/LogoTransparent50.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PerfectScrollbar from "perfect-scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

// var ps;

// class SideBar extends Component {

//   constructor(props) {
//     super(props);
//     this.activeRoute.bind(this);
//     this.sidebar = React.createRef();
//   }

//   // verifies if routeName is the one active (in browser input)
//   activeRoute(routeName) {
//     return this.props.location && this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
//   }

//   componentDidMount() {
//     const wd = navigator.webdriver;
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps = new PerfectScrollbar(this.sidebar.current, {
//         suppressScrollX: true,
//         suppressScrollY: false
//       });
//     }
//   }

//   componentWillUnmount() {
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps.destroy();
//     }
//   }

//   render() {
//     return (
//       <div
//         className="sidebar"
//         data-color={this.props.bgColor}
//         data-active-color={this.props.activeColor}
//       >
//         <div className="logo">
//           <a
//             href="/"
//             className="simple-text logo-mini"
//           >
//             <div className="logo-img">
//               <img src={logo} alt="lunularia logo" />
//             </div>
//           </a>
//           <a
//             href="/"
//             className="simple-text logo-normal"
//           >
//             Lunularia
//           </a>
//         </div>
//         <div className="sidebar-wrapper" ref={this.sidebar}>
//           <Nav>
//             {this.props.routes.map((prop, key) => {
//               return (
//                 <li
//                   className={
//                     this.activeRoute(prop.path) +
//                     (prop.pro ? " active-pro" : "")
//                   }
//                   key={key}
//                 >
//                   <NavLink
//                     to={prop.layout + prop.path}
//                     className="nav-link"
//                     activeClassName="active"
//                   >
//                     {/* <i className={prop.icon} /> */}
//                     <FontAwesomeIcon icon={prop.icon} />
//                     <p>{prop.name}</p>
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </Nav>
//         </div>
//       </div>
//     )
//   }
// }

const SideBar = (props) => {

  return (
    <div
      className="sidebar"
      data-color={props.bgColor || 'light'}
    >
      <div id="sidebar-button">
        <span>=</span>
      </div>
      <div className="sidebar-nav">
        <Nav vertical>
          <NavLink to='/'>
            <FontAwesomeIcon icon='home' /><span>Home</span>
          </NavLink>
          <NavLink to='/'>
            <FontAwesomeIcon icon='coffee' /><span>Coffee</span>
          </NavLink>
        </Nav>
      </div>
    </div>
  )
}

export default SideBar;
