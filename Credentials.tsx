// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwvgaQ9smoLlnVEQ2sScrHuyU3YylEvEY",
  authDomain: "aikurapet.firebaseapp.com",
  projectId: "aikurapet",
  storageBucket: "aikurapet.appspot.com",
  messagingSenderId: "197016612313",
  appId: "1:197016612313:web:5cf99bd0415777ba9efdc8",
  measurementId: "G-1H2N9BM8KN"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase;