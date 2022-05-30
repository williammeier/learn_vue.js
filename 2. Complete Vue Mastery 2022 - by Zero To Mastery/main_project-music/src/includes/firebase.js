import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDydnvmHcTlE1w4uggSl2ME46lvWWotBKk',
  authDomain: 'musicvue-a8822.firebaseapp.com',
  projectId: 'musicvue-a8822',
  storageBucket: 'musicvue-a8822.appspot.com',
  //   messagingSenderId: '736015757199',
  appId: '1:736015757199:web:50f9dfffd2bf465369a5fa',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth, db, usersCollection,
};
