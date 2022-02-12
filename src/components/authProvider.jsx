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

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  };

  const signout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  let value = { user, signin, signout, signup, resetPassword };

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
}

export default AuthProvider;
