import { Outlet } from "react-router-dom";
import SiteFooter from "./siteFooter";
import TopNavigation from "./topNavigation";

function BaseLayout() {

  return (
    <div id="base-layout-container">
      <TopNavigation />
      <div id='base-layout-content'>
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}

export default BaseLayout;
