import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "reactstrap";
import AuthStatus from "../widgets/authStatus";
import logo from '../assets/images/LogoTransparent50.png';

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <div className="nav-wrapper">
        <div className="nav-section nav-brand" onClick={() => navigate("/")}>
          <img src={logo} alt="Malayitcha logo - truck in motion" />
          <span>Malayitcha Zonke</span>
        </div>
        <div className="nav-section nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/protected">Goods</Link>
            </li>
            <li>
              <Link to="/protected2">Passenger</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="nav-section nav-authstatus">
          <AuthStatus />
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
