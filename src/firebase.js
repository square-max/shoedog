import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//masse grier fra firebase
var firebaseConfig = {
    apiKey: "AIzaSyBNgm92A_kP0NMeaUdEaLobe-fO3rGiw5g",
    authDomain: "firestore-og-moro.firebaseapp.com",
    databaseURL: "https://firestore-og-moro.firebaseio.com",
    projectId: "firestore-og-moro",
    storageBucket: "firestore-og-moro.appspot.com",
    messagingSenderId: "173041809891",
    appId: "1:173041809891:web:d822a2a71d5f9cc14f48d6"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore() 