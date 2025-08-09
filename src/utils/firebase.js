// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2TAwK2BaIAs_UFH6QKFfsAugVSP60LmY",
  authDomain: "netflix-gpt-6ea43.firebaseapp.com",
  projectId: "netflix-gpt-6ea43",
  storageBucket: "netflix-gpt-6ea43.firebasestorage.app",
  messagingSenderId: "362504303707",
  appId: "1:362504303707:web:2f61f931c42ddfdae1bb7e",
  measurementId: "G-BX0BTCPP9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();