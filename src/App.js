import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/authProvider';
import BaseLayout from './layout/baseLayout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTachometerAlt,
  faSearch,
  faCog,
  faCheck,
  faCheckSquare,
  faCheckCircle,
  faMinusCircle,
  faCoffee,
  faCross,
  faHome,
  faEnvelope,
  faPencilAlt,
  faPhone,
  faShippingFast,
  faTrash,
  faTruck,
  faTruckMoving,
  faTruckLoading,
  faUsers,
  faUserSlash,
  faUser,
  faUserCog,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import ContactPage from './views/contactPage';
import HomePage from './views/homePage';
import RealtimeDataProvider from './components/realtimeDataProvider';
import RequireAuth from './components/RequireAuth';

import PublicPages from './views/publicPages';
import Dashboard from './views/dashboard';
import AboutPage from './views/aboutPage';
import HelpPage from './views/aboutPage';
import LoginPage from './views/LoginPage';
import ResetPasswordPage from './views/ResetPasswordPage';
import TermsPage from './views/termsPage';
import TripsPage from './views/tripsPage';
import VehiclesPage from './views/VehiclesPage';
import UserAdminPage from './views/UserAdminPage';
import CrewAdminPage from './views/CrewAdminPage';
import TripAdminPage from './views/TripAdminPage';

library.add(
  fab,
  far,
  faEnvelope,
  faTachometerAlt,
  faSearch,
  faCog,
  faCheck,
  faCheckSquare,
  faCheckCircle,
  faMinusCircle,
  faCoffee,
  faCross,
  faHome,
  faPencilAlt,
  faPhone,
  faShippingFast,
  faTrash,
  faTruck,
  faTruckMoving,
  faTruckLoading,
  faUser,
  faUserCog,
  faUserTag,
  faUsers,
  faUserSlash
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
                  <Route index element={<VehiclesPage />} />
                  <Route
                    path='/dashboard/vehicles'
                    element={<VehiclesPage />}
                  />
                  <Route path='/dashboard/users' element={<UserAdminPage />} />
                  <Route path='/dashboard/crew' element={<CrewAdminPage />} />
                  <Route path='/dashboard/trips' element={<TripAdminPage />} />
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
