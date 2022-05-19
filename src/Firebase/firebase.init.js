// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArhLv890ATvdoiyZ20KT80hvW6XegLDKo",
    authDomain: "list-b65c9.firebaseapp.com",
    projectId: "list-b65c9",
    storageBucket: "list-b65c9.appspot.com",
    messagingSenderId: "218134141545",
    appId: "1:218134141545:web:8cd6f32d047be6722ae0f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;