import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/authProvider';
import BaseLayout from './layout/baseLayout';
import PublicPages from './views/publicPages';
import Dashboard from './views/dashboard';
import AboutPage from './views/aboutPage';
import HelpPage from './views/aboutPage';
import LoginPage from './views/LoginPage';
import ResetPasswordPage from './views/ResetPasswordPage';
import TermsPage from './views/termsPage';
import TripsPage from './views/tripsPage';
import ReservationsPage from './views/reservationsPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTachometerAlt,
  faSearch,
  faCog,
  faCheckSquare,
  faCoffee,
  faHome,
  faEnvelope,
  faPhone,
  faShippingFast,
  faTruck,
  faTruckMoving,
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import ContactPage from './views/contactPage';
import HomePage from './views/homePage';
import RealtimeDataProvider from './components/realtimeDataProvider';
import RequireAuth from './components/RequireAuth';

library.add(
  fab,
  far,
  faEnvelope,
  faTachometerAlt,
  faSearch,
  faCog,
  faCheckSquare,
  faCoffee,
  faHome,
  faPhone,
  faShippingFast,
  faTruck,
  faTruckMoving
);

function App() {
  return (
    <div id='app'>
      <AuthProvider>
        <RealtimeDataProvider>
          <Routes key='app-routes'>
            <Route element={<BaseLayout />}>
              <Route element={<PublicPages />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/reset-password' element={<ResetPasswordPage />} />
                <Route path='/terms' element={<TermsPage />} />
                <Route path='/trips' element={<TripsPage />} />
                <Route
                  path='/dashboard'
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }
                >
                  <Route
                    index
                    element={<ReservationsPage heading='Reservations' />}
                  />
                  <Route
                    path='/dashboard/reservations'
                    element={<ReservationsPage heading='Reservations' />}
                  />
                  <Route
                    path='/dashboard/schedules'
                    element={<ReservationsPage heading='Scheduled trips' />}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </RealtimeDataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
