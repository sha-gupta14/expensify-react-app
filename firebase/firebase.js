import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBUZ79MEbUE2_WyDJXcBOq2gBblqcmfU6E",
    authDomain: "expensify-app-b7aeb.firebaseapp.com",
    databaseURL: "https://expensify-app-b7aeb.firebaseio.com",
    projectId: "expensify-app-b7aeb",
    storageBucket: "expensify-app-b7aeb.appspot.com",
    messagingSenderId: "708995185920"
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleProvider, database as default };
