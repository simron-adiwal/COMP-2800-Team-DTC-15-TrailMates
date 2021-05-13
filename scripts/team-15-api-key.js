// Your web app's Firebase configuration
// const firebase = require("firebase");
// require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAPes5NkunBodm_wtBsW8b-78t8jNfhsgE",
    authDomain: "trailmates-657f0.firebaseapp.com",
    projectId: "trailmates-657f0",
    storageBucket: "trailmates-657f0.appspot.com",
    messagingSenderId: "877707794753",
    appId: "1:877707794753:web:a9ee3826e467041bed69c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();