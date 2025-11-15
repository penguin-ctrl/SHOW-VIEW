// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpo0vHgfyeGNth9ZGaG2LJTVqQKNxmf6w",
  authDomain: "show-view-hostels.firebaseapp.com",
  projectId: "show-view-hostels",
  storageBucket: "show-view-hostels.firebasestorage.app",
  messagingSenderId: "859252494810",
  appId: "1:859252494810:web:ad276b757af5be92fff0e3",
  measurementId: "G-425FNGV7ZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore & Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
