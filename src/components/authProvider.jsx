import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from '../firebase';

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    setLoading(false);
    return unsubscribe;
  }, [])

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const signin = (newUser, callback) => {
    return auth.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback) => {
    return auth.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout, signup };

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
}

export default AuthProvider;
