import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, database, ref, set, onValue } from '../firebase';

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // const getCustomClaims = async () => {
  //   const { claims } = await auth.currentUser.getIdTokenResult();
  //   setCurrentUser({ ...currentUser, claims });
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {

        onValue(ref(database, '/users/' + user.uid), (snapshot) => {
          let extendedData = {};
          if (snapshot.size === 0) {
            extendedData = {
              name: '',
              surname: '',
              displayName: user.email.split('@')[0],
              dob: '',
              email: user.email,
              claims: {
                admin: false,
                consumer: true,
                provider: true
              }
            };
            set(ref(database, 'users/' + user.uid), extendedData);
          } else {
            extendedData = snapshot.val();
          }
          user[extendedData] = extendedData;
          setCurrentUser(user);
        }, {
          onlyOnce: true
        });
      }
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
    setCurrentUser(null);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  let value = { loading, currentUser, signin, signout, signup, resetPassword };

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
}

export default AuthProvider;
