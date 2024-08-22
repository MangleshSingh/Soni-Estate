// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-b8064.firebaseapp.com",
  projectId: "estate-b8064",
  storageBucket: "estate-b8064.appspot.com",
  messagingSenderId: "421012398846",
  appId: "1:421012398846:web:da6e7215726d6779727baf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);