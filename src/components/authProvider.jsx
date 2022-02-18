import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInAnonymously, onAuthStateChanged, database, ref, set, onValue } from '../firebase';

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user || !user.uid) {
        setUser({
          isAnonymous: true,
          extendedData: {
            name: '',
            surname: '',
            displayName: '-',
            dob: '',
            email: '',
            claims: {
              admin: false,
              consumer: true,
              provider: false
            }
          }
        })
      } else {
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
          setUser({ ...user, extendedData })
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

  const signinanonymous = (email, password) => {
    try {
      return signInAnonymously(auth)
    } catch (error) {
      console.log('Error while logging in user using email and password', error);
    }
  };

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

  let value = { loading, user, signin, signout, signup, signinanonymous, resetPassword };

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
}

export default AuthProvider;
