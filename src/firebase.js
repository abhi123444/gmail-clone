import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAn04MGOFjhYBVd7N0IJvF6SXl4SLL9Vcs",
    authDomain: "clone-e0505.firebaseapp.com",
    projectId: "clone-e0505",
    storageBucket: "clone-e0505.appspot.com",
    messagingSenderId: "803649531259",
    appId: "1:803649531259:web:47ee7c309a5888d29ee1de"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};