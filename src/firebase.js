import { initializeApp } from 'firebase/app';
// import admin from 'firebase-admin';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  get,
  remove,
} from 'firebase/database';

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

// const adminApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
// });

const auth = getAuth();
const database = getDatabase();
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  onAuthStateChanged,
  database,
  ref,
  get,
  push,
  set,
  onValue,
  remove,
  // adminApp,
};

export default app;
