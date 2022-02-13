import { Navbar } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/LogoTransparent50.png'
import AuthStatus from '../widgets/AuthStatus';

const TopNavigation = () => {
  const navigate = useNavigate();
  return (
    <Navbar id='top-navigation'>
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
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
          </ul>
        </div>
        <div className="nav-section nav-authstatus">
          <AuthStatus />
        </div>
      </div>
    </Navbar>
  )
}

export default TopNavigation;