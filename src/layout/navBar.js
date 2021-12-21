import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import AuthStatus from "../widgets/authStatus";

const NavigationBar = () => {
  return (
    <Navbar>
      <div className="nav-wrapper">
        <div className="nav-section">
          <span>Navigation bar</span>
        </div>
        <div className="nav-section">
          <ul>
            <li>
              <Link to="/">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/protected2">Protected Page 2</Link>
            </li>
          </ul>
        </div>
        <div className="nav-section flex-justify-right">
          <AuthStatus />
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
