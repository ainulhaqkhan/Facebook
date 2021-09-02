import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAzqxo2HJucv5ZkTv4zGBoInsjkADZfdxw",
    authDomain: "facebook-2-e1952.firebaseapp.com",
    projectId: "facebook-2-e1952",
    storageBucket: "facebook-2-e1952.appspot.com",
    messagingSenderId: "1012049211876",
    appId: "1:1012049211876:web:a9360ba21a1c9b93e217f1"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();

  const storage = firebase.storage();

  export { db, storage }