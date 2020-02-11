const firebase = require("firebase");

firebase.initializeApp({
    appName: "adoptaplant",
    serviceAccount: "./service-account.json",
    authDomain: "adoptaplant-1b4e1.firebaseapp.com",
    databaseURL: "https://adoptaplant-1b4e1.firebaseio.com",
    storageBucket: "adoptaplant-1b4e1.appspot.com"
});

const db = firebase.app().database();

const ref = db.ref("commands/");

function  ref.set({
    water: false,
    light: false
});

setTimeout(() => {
    ref.once("value", function (snapshot) {
        console.log(snapshot.val());
    });
}, 1000);