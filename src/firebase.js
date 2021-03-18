import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-F0vVs0LC6UwK7fTgPVNjSvQ1dKQs82E",
    authDomain: "snapchat-clone-7d02f.firebaseapp.com",
    projectId: "snapchat-clone-7d02f",
    storageBucket: "snapchat-clone-7d02f.appspot.com",
    messagingSenderId: "836301662723",
    appId: "1:836301662723:web:411784e8423fa9ef233c36"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider }
  
