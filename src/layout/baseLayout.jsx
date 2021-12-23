import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";

function BaseLayout() {
  return (
    <div id="base-layout-container">
      <div className="base-layout-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
