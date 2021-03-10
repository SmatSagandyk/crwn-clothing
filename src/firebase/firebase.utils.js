import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhgcMp82R_HPfo51-IBzUYhtYqoto0skc",
    authDomain: "crwn-db-e6ab4.firebaseapp.com",
    projectId: "crwn-db-e6ab4",
    storageBucket: "crwn-db-e6ab4.appspot.com",
    messagingSenderId: "379827460207",
    appId: "1:379827460207:web:70d4095c2c69fee673559a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;