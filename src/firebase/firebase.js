// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm-WAlX4fgmOXY2xFusVwm9MUpEa3A00M",
  authDomain: "slack-clone-eb00c.firebaseapp.com",
  projectId: "slack-clone-eb00c",
  storageBucket: "slack-clone-eb00c.appspot.com",
  messagingSenderId: "231254922916",
  appId: "1:231254922916:web:b9f6283535f558c344b831"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth=getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {db,auth,provider,firebaseApp};