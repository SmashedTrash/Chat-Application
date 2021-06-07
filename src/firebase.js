import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBBgGptEPaf4A_0-8gbQg9FmyGu4CyOQOU",
    authDomain: "chatter-66ae4.firebaseapp.com",
    projectId: "chatter-66ae4",
    storageBucket: "chatter-66ae4.appspot.com",
    messagingSenderId: "220727555729",
    appId: "1:220727555729:web:af3941fd9f2d2ca3ceb130"
  }).auth();