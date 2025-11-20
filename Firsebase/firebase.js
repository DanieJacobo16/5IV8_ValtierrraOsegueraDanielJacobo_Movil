// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzd9uG70f1t262TooktSNp4zEPpnGXUow",
  authDomain: "act1-94f5f.firebaseapp.com",
  projectId: "act1-94f5f",
  storageBucket: "act1-94f5f.firebasestorage.app",
  messagingSenderId: "317893246122",
  appId: "1:317893246122:web:78fedb74957d38dbbbe4d3",
  measurementId: "G-0Q2NP26LW9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);