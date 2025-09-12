// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkZagzkOvaYez4lF2lbgKrAFSMc2t3vWw",
  authDomain: "ai-pocket-agent-b078b.firebaseapp.com",
  projectId: "ai-pocket-agent-b078b",
  storageBucket: "ai-pocket-agent-b078b.firebasestorage.app",
  messagingSenderId: "185450280393",
  appId: "1:185450280393:web:6bc7f6806881c8becea418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)  