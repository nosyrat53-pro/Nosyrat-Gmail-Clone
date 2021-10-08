// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider , getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYhEkbMUbuOp8fAAAgsqanH_s_0rQBXj4",
  authDomain: "nosyrat--clone-a92d0.firebaseapp.com",
  projectId: "nosyrat--clone-a92d0",
  storageBucket: "nosyrat--clone-a92d0.appspot.com",
  messagingSenderId: "221593283075",
  appId: "1:221593283075:web:fca363d4d3b76e5d52bc36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth() ;

auth.useDeviceLanguage();

const db = getFirestore();

export { db , auth , provider } ;