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

// Check database to see if the command to run the 
// pump is set to true.
// If so, run the pump for 4 seconds and set the 
// command back to false.
function checkDBRunPump() { 
    ref.once("value", snap => {
        if (snap.val().water) {
            setPumpState("on")
                .then(() => {
                    setTimeout(() => {
                        setPumpState("off");
                        ref.set({
                            water: false
                        })
                        .catch(err =>  {
                            console.log(`There was an error writing to the database: ${err}`)
                        })
                    }, 4000);
                })
                .catch(err => {
                    console.log(`Error with water pump: ${err}`);
                });
        }
    })
}

// This will run the function to check the database 
// for the command to run the pump every 5 seconds.
// If pump stays on loger than interval this may 
// some kind of stacking problem.
const pumpCheckInt = setInterval(() => {
    checkDBRunPump();
}, 5000);

// After 55 seconds have passed, before next cronjob
// is run, clear the timeout.
setTimeout(() => {
    clearInterval(pumpCheckInt);
    process.exit();
}, 55 * 1000);
