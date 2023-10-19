// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcnGsSLGi-6W8K2_G3OtJCgeHq8-Vmb0I",
    authDomain: "b8a10-brandshop-client-s-b6f60.firebaseapp.com",
    projectId: "b8a10-brandshop-client-s-b6f60",
    storageBucket: "b8a10-brandshop-client-s-b6f60.appspot.com",
    messagingSenderId: "662624561312",
    appId: "1:662624561312:web:76786fc6f445df236ec1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;