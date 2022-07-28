import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAs28cIXk991TUfV9LUgN1ZyMEPdtsoCzI",
    authDomain: "unichat-67d88.firebaseapp.com",
    projectId: "unichat-67d88",
    storageBucket: "unichat-67d88.appspot.com",
    messagingSenderId: "823423268974",
    appId: "1:823423268974:web:893e04cf60de5926b84e7f"
  }).auth();