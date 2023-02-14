// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyANDnAZKPSqJn-pZbdBmFMdN4BOh-IXP2U",
  authDomain: "vue-3-2023-1a056.firebaseapp.com",
  projectId: "vue-3-2023-1a056",
  storageBucket: "vue-3-2023-1a056.appspot.com",
  messagingSenderId: "953289315027",
  appId: "1:953289315027:web:ac5a6dbf49d33f3bf67a26"
};

initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()
export {auth , db};