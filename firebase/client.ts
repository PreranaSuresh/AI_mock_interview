// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-GVe7qWsLH_GESxtebsexCCuJtsOF3Mg",
    authDomain: "prerwise.firebaseapp.com",
    projectId: "prerwise",
    storageBucket: "prerwise.firebasestorage.app",
    messagingSenderId: "790323312517",
    appId: "1:790323312517:web:66b26f1853de3cdf0a76ec",
    measurementId: "G-N630GFV9KN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);