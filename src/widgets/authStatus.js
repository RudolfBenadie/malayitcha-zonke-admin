import { useAuth } from "../assets/context/authContext";
import { useNavigate } from "react-router-dom";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p className="auth-status">You are not logged in.</p>;
  }

  return (
    <p className="auth-status">
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export default AuthStatus;
