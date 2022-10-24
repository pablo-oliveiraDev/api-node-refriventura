const firebase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyCuOiZuzPCpvpl1maB-pYc1Xxkp4nhRYTI",
  authDomain: "sherenergy-5c04b.firebaseapp.com",
  databaseURL: "https://sherenergy-5c04b-default-rtdb.firebaseio.com",
  projectId: "sherenergy-5c04b",
  storageBucket: "sherenergy-5c04b.appspot.com",
  messagingSenderId: "1055108278134",
  appId: "1:1055108278134:web:3426880d5e9fa85ed8fc57",
  measurementId: "G-FF9MDHCCL7"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;