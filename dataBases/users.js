const firebase = require('../services/firebaseConn');

const db = firebase.firestore();
const Users = db.collection('users');
const Serv = db.collection('Servicos');
module.exports = {Users:Users,Serv:Serv};