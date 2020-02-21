const firebase = require('firebase');
const cronGen = require('cron-time-generator');
const CronTime = require('cron').CronTime;
const CronJob = require('cron').CronJob;
// const setPumpState = require('../controllers/pump');

firebase.initializeApp({
    appName: "adoptaplant",
    serviceAccount: "../service-account.json",
    authDomain: "adoptaplant-1b4e1.firebaseapp.com",
    databaseURL: "https://adoptaplant-1b4e1.firebaseio.com",
    storageBucket: "adoptaplant-1b4e1.appspot.com"
});

const db = firebase.app().database();

const ref = db.ref("commands/time");



// // Establish a new cron job that will run the water pump for 4 seconds.
// // the time is set at default of every second but will be changed when a 
// // command is received from the database.
const waterJob = new CronJob('* * * * * *', () => {
    console.log("Pump just ran");
    // setPumpState('on')
    //     .then(() => {
    //         setTimeout(() => {
    //             setPumpState("off");
    //             ref.update({
    //                     water: false
    //                 })
    //                 .catch(err => {
    //                     console.log(`There was an error writing to the 
    //                 database: ${err}`);
    //                     // Exit the script, if we can't change the water command
    //                     // back to false then the pump will run continuously.
    //                     process.exit();
    //                 })
    //         }, 2000);
    //     })
    //     .catch(err => {
    //         console.log(`Error with water pump: ${err}`);
    //         // Exit the script, something is wrong with the pump so we don't want
    //         // to continue trying to run it.
    //         process.exit();
    //     });
}, null, false, 'America/Los_Angeles');

// Listen for changes to the database.
ref.on("value", snap => {
    // If waterTime is set to false rather than a time, stop the job.
    if (!snap.val().runJob) {
        console.log("Stopping job");
        waterJob.stop();
    } else {
        console.log("Starting job");
        console.log(snap.val().waterAt);
        // const newCronTime = cronTime.everyDayAt(snap.val().waterAt);
        const newCronTime = cronGen.everyMinute();
        console.log(newCronTime);
        const time = new CronTime(newCronTime);
        waterJob.setTime(time);
        waterJob.start();
    }
})
