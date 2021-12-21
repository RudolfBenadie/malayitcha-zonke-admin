import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/main.scss";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/baseLayout";
import AuthProvider from "./components/authProvider";
import RequireAuth from "./components/requireAuth";
import LoginPage from "./components/loginPage";

export default function App() {
  return (
    <AuthProvider>
      <Routes key={"RouteBase"}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
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
      </Routes>
    </AuthProvider>
  );
}

function PublicPage() {
  return (
    <div>
      <h3>Public</h3>
    </div>
  );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
