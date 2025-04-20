// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-1WtOc2jgd4SB84mu94pDifmi20lR54U",
  authDomain: "productmanager-4044a.firebaseapp.com",
  projectId: "productmanager-4044a",
  storageBucket: "productmanager-4044a.firebasestorage.app",
  messagingSenderId: "255604809016",
  appId: "1:255604809016:web:040c80e18cd7ef026335cd",
  measurementId: "G-MZ1LFKDPH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };