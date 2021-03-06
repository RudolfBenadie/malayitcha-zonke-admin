import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/main.scss";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/authProvider";
import BaseLayout from "./layout/baseLayout";
import PublicPages from "./views/publicPages";
import Dashboard from "./views/dashboard";
import AboutPage from "./views/aboutPage";
import HelpPage from "./views/aboutPage";
import LoginPage from "./views/loginPage";
import ReservationsPage from "./views/reservationsPage";
import TermsPage from "./views/termsPage";
import TripsPage from "./views/tripsPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometerAlt,
  faSearch,
  faCog,
  faCheckSquare,
  faCoffee,
  faHome,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactPage from "./views/contactPage";
import HomePage from "./views/homePage";

library.add(
  fab,
  faEnvelope,
  faTachometerAlt,
  faSearch,
  faCog,
  faCheckSquare,
  faCoffee,
  faHome,
  faPhone
);

function App() {
  return (
    <div id="app">
      <AuthProvider>
        <Routes key="app-routes">
          <Route element={<BaseLayout />}>
            <Route element={<PublicPages />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/trips" element={<TripsPage />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
