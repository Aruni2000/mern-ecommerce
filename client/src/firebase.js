// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-ecommerce-9e63c.firebaseapp.com",
  projectId: "mern-ecommerce-9e63c",
  storageBucket: "mern-ecommerce-9e63c.appspot.com",
  messagingSenderId: "319520086694",
  appId: "1:319520086694:web:0a135a96f4a7b32578f267"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);