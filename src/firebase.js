import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {

    apiKey: "AIzaSyA_Av_XWuC-0qa3UWg2nLIMY6WWR76YwFc",
    authDomain: "react-portfolio-6061d.firebaseapp.com",
    projectId: "react-portfolio-6061d",
    storageBucket: "react-portfolio-6061d.appspot.com",
    messagingSenderId: "23747139228",
    appId: "1:23747139228:web:fce2d783f117c300d2ff59",
    measurementId: "G-MGNXWXEX1G"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();