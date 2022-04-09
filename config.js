import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyB0FwtYSSDkVKsq0Q21LFS21VvL2CWuaWQ",
  authDomain: "voting-app-a13c9.firebaseapp.com",
  databaseURL: "https://voting-app-a13c9-default-rtdb.firebaseio.com",
  projectId: "voting-app-a13c9",
  storageBucket: "voting-app-a13c9.appspot.com",
  messagingSenderId: "317456819483",
  appId: "1:317456819483:web:8c096dc1cf121450df5fbe",
  measurementId: "G-NEM2N0ZG74"

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();