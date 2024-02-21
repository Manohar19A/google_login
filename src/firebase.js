// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtt_YsidL68KA1u24flqe6LITU4qEdKkY",
  authDomain: "login-page-42bba.firebaseapp.com",
  projectId: "login-page-42bba",
  storageBucket: "login-page-42bba.appspot.com",
  messagingSenderId: "217166504832",
  appId: "1:217166504832:web:2d364fc0d135e2519ed765",
  databaseURL:"https://login-page-42bba-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);