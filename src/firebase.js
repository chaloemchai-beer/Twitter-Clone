import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCim5zgkzuimKr0BE3o1OPwohygA-TnKJM",
  authDomain: "twitter-clone-b8d39.firebaseapp.com",
  projectId: "twitter-clone-b8d39",
  storageBucket: "twitter-clone-b8d39.appspot.com",
  messagingSenderId: "730704384235",
  appId: "1:730704384235:web:9c65affb1f4c20c1426eae",
  measurementId: "G-5JY7S0G1DQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
