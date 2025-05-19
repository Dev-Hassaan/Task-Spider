// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFKTIVHFx5gEPgxUYPDYMBIr5SonrYMd8",
  authDomain: "todo-list-1b5ab.firebaseapp.com",
  projectId: "todo-list-1b5ab",
  storageBucket: "todo-list-1b5ab.firebasestorage.app",
  messagingSenderId: "733533401324",
  appId: "1:733533401324:web:c8fe1d29dc04af338e35c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)