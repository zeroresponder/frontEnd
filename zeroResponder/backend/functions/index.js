const functions = require("firebase-functions");
const fetch = require("node-fetch");

const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore;

const db = admin.firestore();

exports.newUser = functions.auth.user().onCreate((user) => {
  console.log(user.uid);
  return db
    .collection("users")
    .doc(user.uid)
    .create(JSON.parse(JSON.stringify(user)));
});
