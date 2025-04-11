// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: "t15-dm",
  storageBucket: "t15-dm.appspot.com",
  messagingSenderId: MESEGESID,
  appId:APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};
