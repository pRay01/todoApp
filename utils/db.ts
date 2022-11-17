// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqXBZG-totmQKhPvBFkunatoTodaU74LM",
  authDomain: "todoapp-a0a37.firebaseapp.com",
  projectId: "todoapp-a0a37",
  storageBucket: "todoapp-a0a37.appspot.com",
  messagingSenderId: "938206062144",
  appId: "1:938206062144:web:a0866afcff1c5ef731e1a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export {database}