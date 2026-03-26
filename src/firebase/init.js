// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_g-n-8evKAScO-xrEjRIkjqG7FBaHbsI",
  authDomain: "reign-anime-zone.firebaseapp.com",
  projectId: "reign-anime-zone",
  storageBucket: "reign-anime-zone.firebasestorage.app",
  messagingSenderId: "205048625089",
  appId: "1:205048625089:web:b4ed86e200c2cbca54a140"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();