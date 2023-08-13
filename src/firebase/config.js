// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qBRwMas27ByhQk25b-MrCYLemxiKrLk",
  authDomain: "proyecto-final-reactjs-ef68d.firebaseapp.com",
  projectId: "proyecto-final-reactjs-ef68d",
  storageBucket: "proyecto-final-reactjs-ef68d.appspot.com",
  messagingSenderId: "207754099594",
  appId: "1:207754099594:web:0c0df019349b210145e673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const datab = getFirestore(app)