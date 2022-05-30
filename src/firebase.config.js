import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXbwHGtZjcY18_37-R1Vci4_7-bmwTh4g",
  authDomain: "house-marketplace-app-5272b.firebaseapp.com",
  projectId: "house-marketplace-app-5272b",
  storageBucket: "house-marketplace-app-5272b.appspot.com",
  messagingSenderId: "1065661322147",
  appId: "1:1065661322147:web:e8baac0dff0559209e8016",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
