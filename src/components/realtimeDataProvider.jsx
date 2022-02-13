import React, { useEffect, useState } from "react";
import { RealtimeDataContext } from "../context/RealtimeDataContext";
import { database } from '../firebase';

function RealtimeDataProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = Promise.resolve('onAuthStateChanged(auth, user => { setUser(user) });');
    setLoading(false);
    return unsubscribe;
  }, [])

  const signup = (email, password) => {
    try {
      return Promise.resolve('Promise function imported from firebase');
    } catch (error) {
      console.log('Error while creating a user using email and password', error);
    }
  }

  let value = { loading, signup };

  return <RealtimeDataContext.Provider value={value}>
    {!loading && children}
  </RealtimeDataContext.Provider>;
}

export default RealtimeDataProvider;
