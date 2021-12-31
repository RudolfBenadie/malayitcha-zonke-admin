import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/main.scss";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/baseLayout";
import AuthProvider from "./components/authProvider";
import RequireAuth from "./components/requireAuth";
import LoginPage from "./components/loginPage";
import Dashboard from "./views/dashboard";
import ContactPage from "./views/contactPage";
import TripsPage from "./views/tripsPage";
import AboutPage from "./views/aboutPage";
import ReservationsPage from "./views/reservationsPage";
import HelpPage from "./views/helpPage";
import TermsPage from "./views/termsPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometerAlt,
  faSearch,
  faCog,
  faCheckSquare,
  faCoffee,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faTachometerAlt,
  faSearch,
  faCog,
  faCheckSquare,
  faCoffee,
  faHome
);

export default function App() {
  return (
    <AuthProvider>
      <Routes key={"RouteBase"}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/trips" element={<TripsPage />} />
            <Route
              path="/reservations"
              element={
                <RequireAuth>
                  <ReservationsPage />
                </RequireAuth>
              }
            />
            <Route
              path="/protected2"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
