// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ4d4ZHGrJKwATFrZMaSiWgZ3QoqL4FAM",
    authDomain: "final-project-d4f02.firebaseapp.com",
    projectId: "final-project-d4f02",
    storageBucket: "final-project-d4f02.appspot.com",
    messagingSenderId: "826337666674",
    appId: "1:826337666674:web:5e9c646252a7cc5463c4eb",
    measurementId: "G-52L4NRS6WX"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};