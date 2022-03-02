// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3fyIAWBOxdWggVo_jIkPO8MFSAaD8yXU",
  authDomain: "ogso-application.firebaseapp.com",
  projectId: "ogso-application",
  storageBucket: "ogso-application.appspot.com",
  messagingSenderId: "1047529689642",
  appId: "1:1047529689642:web:60e21ba5485395d8ba2953",
  measurementId: "G-365N46GPY0"
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
