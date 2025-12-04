// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpFJsGqHSI846GGPrwHn3R08Ou5TlyPg4",
  authDomain: "organic-foods-56053.firebaseapp.com",
  projectId: "organic-foods-56053",
  storageBucket: "organic-foods-56053.firebasestorage.app",
  messagingSenderId: "1041784141958",
  appId: "1:1041784141958:web:a7f1b09a5dc8a68f1b7907",
  measurementId: "G-91KM097LEB"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app