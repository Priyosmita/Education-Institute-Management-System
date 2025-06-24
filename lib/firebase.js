// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs9myGipNc87KhclE7bJjMdfapcNOlhRA",
  authDomain: "eims-64e15.firebaseapp.com",
  projectId: "eims-64e15",
  storageBucket: "eims-64e15.firebasestorage.app",
  messagingSenderId: "971028404523",
  appId: "1:971028404523:web:4cf9a7a33d5603e6318d6e",
  measurementId: "G-EBMPFQZRCY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };