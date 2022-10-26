// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK2teXajTjcnqO2y0bMfQt29So6tV0430",
    authDomain: "learning-with-shakil.firebaseapp.com",
    projectId: "learning-with-shakil",
    storageBucket: "learning-with-shakil.appspot.com",
    messagingSenderId: "412635293720",
    appId: "1:412635293720:web:60fa0eb5014d8ebca17b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;