import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup,updateProfile } from "firebase/auth";

// Your Firebase Config (Replace with your actual Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCOELePHD-smvfEej3D8IP2Wax_WIS_6pQ",
    authDomain: "kicks-ecommerce.firebaseapp.com",
    projectId: "kicks-ecommerce",
    storageBucket: "kicks-ecommerce.firebasestorage.app",
    messagingSenderId: "835208793745",
    appId: "1:835208793745:web:c5bd2814ecbbf7ac3bb930"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, createUserWithEmailAndPassword, signInWithPopup,updateProfile};
