// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU4vyRludhFjkwUYRk115LfUifwQIGpoA",
  authDomain: "auth-moha-milon-d1476.firebaseapp.com",
  projectId: "auth-moha-milon-d1476",
  storageBucket: "auth-moha-milon-d1476.appspot.com",
  messagingSenderId: "208796295198",
  appId: "1:208796295198:web:8f7d1ac0f08b178a0dce0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth);