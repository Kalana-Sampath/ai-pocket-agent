  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIlMkccoijY9Pa3UtBsPPdr_H4TTpzwHk",
  authDomain: "ai-pocket-agent-99fc9.firebaseapp.com",
  projectId: "ai-pocket-agent-99fc9",
  storageBucket: "ai-pocket-agent-99fc9.firebasestorage.app",
  messagingSenderId: "303501961413",
  appId: "1:303501961413:web:9dddb859e84f619132e8ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);