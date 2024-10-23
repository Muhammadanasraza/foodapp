// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3phZInJa3ELiFzn_xsqD_vREbxcoq1Q",
  authDomain: "food-project-a7fad.firebaseapp.com",
  projectId: "food-project-a7fad",
  storageBucket: "food-project-a7fad.appspot.com",
  messagingSenderId: "370636690445",
  appId: "1:370636690445:web:2a9218af3833d2aceef144",
  measurementId: "G-N4PEWMPG4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}