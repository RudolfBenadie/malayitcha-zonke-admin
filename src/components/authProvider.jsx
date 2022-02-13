import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '../firebase';

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
    });
    setLoading(false);
    return unsubscribe;
  }, [])

  const signup = (email, password) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('Error while creating a user using email and password', error);
    }
  }

  const signin = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log('Error while logging in user using email and password', error);
    }
  };

  const signout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  let value = { loading, user, signin, signout, signup, resetPassword };

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
}

export default AuthProvider;
