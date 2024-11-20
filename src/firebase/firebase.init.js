// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrgm6xbf-P09g3TyP9R1u96HmYXAhtyXg",
    authDomain: "assignment-9-14df0.firebaseapp.com",
    projectId: "assignment-9-14df0",
    storageBucket: "assignment-9-14df0.firebasestorage.app",
    messagingSenderId: "643870603003",
    appId: "1:643870603003:web:a7af7df0238007e907625e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
