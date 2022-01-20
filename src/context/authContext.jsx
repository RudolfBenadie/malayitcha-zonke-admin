import React from "react";

export const claims = {
  user: "Anonymous",
};

export const AuthContext = React.createContext(claims);

export const useAuth = () => {
  return React.useContext(AuthContext);
};
