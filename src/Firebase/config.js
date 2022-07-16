// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0agb9257EpyQ4B9_yG2Gyh6yavhQJmqE",
  authDomain: "loobook-97fb4.firebaseapp.com",
  projectId: "loobook-97fb4",
  storageBucket: "loobook-97fb4.appspot.com",
  messagingSenderId: "632792558031",
  appId: "1:632792558031:web:eb91add7f004744171caba",
  measurementId: "G-7K2YT8MBMN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const projectStorage= firebase.storage();
const projectFirestore = firebase.firestore();
export{projectStorage,projectFirestore};