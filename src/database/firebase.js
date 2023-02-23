import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyC5jLQAezHjVaqaL1y3nfPOHXH6KFJ-0oU",
    authDomain: "snkrsxu.firebaseapp.com",
    databaseURL: "https://snkrsxu-default-rtdb.firebaseio.com/",
    projectId: "snkrsxu",
    storageBucket: "snkrsxu.appspot.com",
    messagingSenderId: "652819388919",
    appId: "1:652819388919:web:b77272440eb923c3ebf6f2",
    measurementId: "G-PTF4FMRF51"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
