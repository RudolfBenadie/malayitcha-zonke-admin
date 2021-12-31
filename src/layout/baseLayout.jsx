import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NavigationBar from './navBar';

function BaseLayout() {
  return (
    <>
      <div id="base-layout-container">
        <NavigationBar />
        <div id="base-layout-outlet">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BaseLayout;
