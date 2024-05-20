// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArcWEPMgWNyUwmmJ8rn-uc41d_busPoBs",
  authDomain: "t15-dm.firebaseapp.com",
  projectId: "t15-dm",
  storageBucket: "t15-dm.appspot.com",
  messagingSenderId: "476611279723",
  appId: "1:476611279723:web:27371af79d7dd47bbeaa2e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};