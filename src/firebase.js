import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVgTbvuPhU1C7x0xsG8lYqhKXxQIZkvOc",
  authDomain: "react-sololearn-firestore.firebaseapp.com",
  projectId: "react-sololearn-firestore",
  storageBucket: "react-sololearn-firestore.appspot.com",
  messagingSenderId: "928385173673",
  appId: "1:928385173673:web:ca400a2f92a7fa9b5f01b8"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}