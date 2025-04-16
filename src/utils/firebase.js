// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiStWwY6eNa46t1CEq5NsC8vELyeuYcXk",
  authDomain: "netflix-gpt-7339d.firebaseapp.com",
  projectId: "netflix-gpt-7339d",
  storageBucket: "netflix-gpt-7339d.firebasestorage.app",
  messagingSenderId: "911591557417",
  appId: "1:911591557417:web:397928add168a6228dcf38",
  measurementId: "G-ZBF5X9CD7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
