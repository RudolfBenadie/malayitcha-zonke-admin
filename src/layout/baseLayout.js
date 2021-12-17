import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../widgets/authStatus";
import NavigationBar from "./navBar";

function BaseLayout() {
  return (
    <div id="base-layout-container">
      <NavigationBar />
      <div className="dashboard">
        <AuthStatus />
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

        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
