import { Navbar } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/LogoTransparent50.png'
import AuthStatus from '../widgets/AuthStatus';
import { useAuth } from "../context/AuthContext";

const ProtectedLink = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <li>
        <Link to="/dashboard">Admin</Link>
      </li>
    )
  } else {
    return <></>
  }
}

const TopNavigation = () => {
  const navigate = useNavigate();
  const auth = useAuth();
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
            <ProtectedLink isLoggedIn={auth.currentUser !== null && auth.currentUser !== undefined} />
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
