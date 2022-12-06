// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import "firebase/auth";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7aPy9BWQSjnQ2afsHkIIDzfSIfTcoNKo",
  authDomain: "app-react-native-f1593.firebaseapp.com",
  projectId: "app-react-native-f1593",
  storageBucket: "app-react-native-f1593.appspot.com",
  messagingSenderId: "259991993112",
  appId: "1:259991993112:web:3748b10e8ee806d8487c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);


export default db;