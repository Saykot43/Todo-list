// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAM5366GWnc-8M1WbrJCQ8CWOwysBWoKM",
    authDomain: "todo-f5827.firebaseapp.com",
    projectId: "todo-f5827",
    storageBucket: "todo-f5827.appspot.com",
    messagingSenderId: "580092145999",
    appId: "1:580092145999:web:e02bd79aec81539cb9953a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;