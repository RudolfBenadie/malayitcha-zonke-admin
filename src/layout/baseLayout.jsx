import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Outlet } from "react-router-dom";
import SiteFooter from "./siteFooter";
import TopNavigation from "./topNavigation";

function BaseLayout() {
  const auth = useAuth();

  useEffect(() => {
    async function anonymousSignIn() {
      const authResult = await auth.signinanonymous(auth);
      debugger;
      console.log(authResult);
    }
    anonymousSignIn();
  });

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
