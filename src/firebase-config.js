import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRHr4T-GUVOt3w6JlopHyR0j6u7gpqhYk",
  authDomain: "to-do-app-8212a.firebaseapp.com",
  projectId: "to-do-app-8212a",
  storageBucket: "to-do-app-8212a.appspot.com",
  messagingSenderId: "677084128858",
  appId: "1:677084128858:web:5a66435038734df5f15a63",
  measurementId: "G-M0LESSPDYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
