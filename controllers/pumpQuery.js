const firebase = require("firebase");
 const setPumpState = require("./pump");

firebase.initializeApp({
    appName: "adoptaplant",
    serviceAccount: "../service-account.json",
    authDomain: "adoptaplant-1b4e1.firebaseapp.com",
    databaseURL: "https://adoptaplant-1b4e1.firebaseio.com",
    storageBucket: "adoptaplant-1b4e1.appspot.com"
});

const db = firebase.app().database();

const ref = db.ref("commands/");

ref.once("value", snap => {
    if (snap.val().water) {
        setPumpState("on")
            .then(() => {
                setTimeout(() => {
                    setPumpState("off");
                    ref.set({
                        water: false
                    })
                    .then(() => process.exit())
                    .catch(err =>  console.log(`There was an error writing to the database: ${err}`))
                }, 4000);
            })
            .catch(err => {
                console.log(`Error with water pump: ${err}`);
            });
    }
})
