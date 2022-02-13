import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let { user } = useAuth();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

export default RequireAuth;
