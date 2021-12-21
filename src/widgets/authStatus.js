import { useAuth } from "../assets/context/authContext";
import { useNavigate } from "react-router-dom";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <span className="auth-status">You are not logged in.</span>;
  }

  return (
    <span className="auth-status">
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </span>
  );
}

export default AuthStatus;
