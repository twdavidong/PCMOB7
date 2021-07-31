// This might work if the above doesn’t: 

import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { firebase } from "@firebase/app";
//import firebase from 'firebase/app';
//import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCLRMPhkoAPSQVmxcrwL0dQoJSxa_T3bMA",
    authDomain: "todofirebase001-d7380.firebaseapp.com",
    projectId: "todofirebase001-d7380",
    storageBucket: "todofirebase001-d7380.appspot.com",
    messagingSenderId: "1033005485045",
    appId: "1:1033005485045:web:235bbea1dd6bfc6135aebc"
};

// rnPAOUFIffh0OjVQFXmNQi4cvd83
// 

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;