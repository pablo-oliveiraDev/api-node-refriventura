const firebase = require('firebase');


const firebaseConfig = {
    apiKey: "AIzaSyAwTCgK-u9nJ86jnKQKyZLdjXkiodqq4gw",
    authDomain: "venturarefri-3ec83.firebaseapp.com",
    projectId: "venturarefri-3ec83",
    storageBucket: "venturarefri-3ec83.appspot.com",
    messagingSenderId: "9844645214",
    appId: "1:9844645214:web:bb80283b5ebe51f81083cf"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;