// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhZaTkUPgeiVcK_lpn3TeTjv8jPDvPHp0",
  authDomain: "pinteresty-146c1.firebaseapp.com",
  projectId: "pinteresty-146c1",
  storageBucket: "pinteresty-146c1.firebasestorage.app",
  messagingSenderId: "124922725082",
  appId: "1:124922725082:web:ff06e31f76b982ea285be3",
  measurementId: "G-KGMXJERC0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app