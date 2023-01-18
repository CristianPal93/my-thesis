import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVAcSMwws_7JuN3DFRH4-SWnvD7K8VdfM",
    authDomain: "piom-ed4a8.firebaseapp.com",
    projectId: "piom-ed4a8",
    storageBucket: "piom-ed4a8.appspot.com",
    messagingSenderId: "49266249530",
    appId: "1:49266249530:web:ee5f73560904f23b978a03",
    measurementId: "G-EXT3L82MH1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export {
    db
}