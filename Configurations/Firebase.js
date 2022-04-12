// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuxn3RTrAmI_gXXtHFmqPg0-BrkiGJsrQ",
  authDomain: "ogso-application.firebaseapp.com",
  databaseURL: "https://ogso-application-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ogso-application",
  storageBucket: "ogso-application.appspot.com",
  messagingSenderId: "1047529689642",
  appId: "1:1047529689642:web:5faac6d10d1a569aba2953",
  measurementId: "G-M9JG1T3LVT"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
 } else {
     app = firebase.app()
 }

const auth = firebase.auth()

export {auth };
