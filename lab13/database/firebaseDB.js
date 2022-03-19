import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDHMm2ow8oEPlGYXwVYlPBfcW1AOlL-XVI",
  authDomain: "mobile-lab-13-4cfd7.firebaseapp.com",
  projectId: "mobile-lab-13-4cfd7",
  storageBucket: "mobile-lab-13-4cfd7.appspot.com",
  messagingSenderId: "186422454103",
  appId: "1:186422454103:web:4534a5395e579f59b58012",
  measurementId: "G-1T6WHS2ZP0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
