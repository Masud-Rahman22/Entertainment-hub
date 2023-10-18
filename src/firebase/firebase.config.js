// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEUkCU11AuL2UxiAyZoK14JxG9t2BluoQ",
    authDomain: "brand-shop-30792.firebaseapp.com",
    projectId: "brand-shop-30792",
    storageBucket: "brand-shop-30792.appspot.com",
    messagingSenderId: "882305253757",
    appId: "1:882305253757:web:f7126037435c73490b4c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;