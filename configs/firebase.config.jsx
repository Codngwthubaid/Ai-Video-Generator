import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn3i0M-TSeROJfGHV9haooj1SKhWTVEnA",
  authDomain: "nuvgen-b53a2.firebaseapp.com",
  projectId: "nuvgen-b53a2",
  storageBucket: "nuvgen-b53a2.firebasestorage.app",
  messagingSenderId: "71989950079",
  appId: "1:71989950079:web:c4e1cce4045cf5dc55b14a",
  measurementId: "G-3B9ZMXX6EY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);