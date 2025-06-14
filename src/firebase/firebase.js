// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf3jvmfE1A0o3UocNIJwts8djCZGBB71w",
  authDomain: "instagram-clone-e0a94.firebaseapp.com",
  projectId: "instagram-clone-e0a94",
  storageBucket: "instagram-clone-e0a94.firebasestorage.app",
  messagingSenderId: "932362494200",
  appId: "1:932362494200:web:734fbc1ed6a0b0ec6c1b0d",
  measurementId: "G-1MYSPV14YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
