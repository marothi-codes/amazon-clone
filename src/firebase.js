import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBWJhb-Qmhb0ps9oTZJaq5OGwO6i1oWgFU",
  authDomain: "clone-c3477.firebaseapp.com",
  projectId: "clone-c3477",
  storageBucket: "clone-c3477.appspot.com",
  messagingSenderId: "36927152241",
  appId: "1:36927152241:web:350e221209b14d51b6fbd0",
  measurementId: "G-F16DYB0656",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
