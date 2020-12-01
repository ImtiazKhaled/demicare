import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB8i13qyIimDhfiNywvpqCPIekxASSnPM",
  authDomain: "demi-care.firebaseapp.com",
  databaseURL: "https://demi-care.firebaseio.com",
  projectId: "demi-care",
  storageBucket: "demi-care.appspot.com",
  messagingSenderId: "623054639961",
  appId: "1:623054639961:web:79c24fce842200e5283248",
  measurementId: "G-W448NDBSED",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;
