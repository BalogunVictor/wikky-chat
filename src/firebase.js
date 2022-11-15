
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:"AIzaSyBxr7ieJgZFWvUodeNGiBBGD-zqoqX34PY",
  authDomain: "chat-e4a95.firebaseapp.com",
  projectId: "chat-e4a95",
  storageBucket: "chat-e4a95.appspot.com",
  messagingSenderId: "242718264356",
  appId: "1:242718264356:web:a43aa4879096a93a6a5cb1",
  measurementId: "G-JFSQ23KHW9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);