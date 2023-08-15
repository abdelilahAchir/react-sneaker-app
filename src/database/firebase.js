import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);

export default firebase;


/*const firebaseConfig = {
  apiKey: "AIzaSyC5jLQAezHjVaqaL1y3nfPOHXH6KFJ-0oU",
  authDomain: "snkrsxu.firebaseapp.com",
  databaseURL: "https://snkrsxu-default-rtdb.firebaseio.com/",
  projectId: "snkrsxu",
  storageBucket: "snkrsxu.appspot.com",
  messagingSenderId: "652819388919",
  appId: "1:652819388919:web:b77272440eb923c3ebf6f2",
  measurementId: "G-PTF4FMRF51"
};*/