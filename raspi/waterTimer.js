// Set an event listener to firebase for the pump time command
// to change.

// On any change to this time, convert the time to cron syntax
// schedule a node-cron job using the converted syntax and start
// the job.

// The script should stay open as long as this job is scheduled.

// There should be a way to notify the user what schedule the 
// pump is currently on and provide a cancel button to end the 
// task.

// The cancel command will be to set waterTime to false rather
// than a time.

// Event listener will wait for changes to waterTime.  If waterTime
// is a string (truthy) it will use that string as the schedule for
// the job.  If waterTime is set to false, the job will be stopped.
const firebase = require('firebase');
const cronTime = require('cron-time-generator');
const CronJob = require('cron').CronJob;
const setPumpState = require('../controllers/pump');

firebase.initializeApp({
    appName: "adoptaplant",
    serviceAccount: "../service-account.json",
    authDomain: "adoptaplant-1b4e1.firebaseapp.com",
    databaseURL: "https://adoptaplant-1b4e1.firebaseio.com",
    storageBucket: "adoptaplant-1b4e1.appspot.com"
});

const db = firebase.app().database();

const ref = db.ref("commands/time");



// Establish a new cron job that will run the water pump for 4 seconds.
// the time is set at default of every second but will be changed when a 
// command is received from the database.
const waterJob = new CronJob('* * * * * *', () => {
    setPumpState('on')
        .then(() => {
            setTimeout(() => {
                setPumpState("off");
                ref.set({
                        water: false
                    })
                    .catch(err => {
                        console.log(`There was an error writing to the 
                    database: ${err}`);
                        // Exit the script, if we can't change the water command
                        // back to false then the pump will run continuously.
                        process.exit();
                    })
            }, 4000);
        })
        .catch(err => {
            console.log(`Error with water pump: ${err}`);
            // Exit the script, something is wrong with the pump so we don't want
            // to continue trying to run it.
            process.exit();
        });
}, null, false, 'America/Los_Angeles');

// Listen for changs to the database.
ref.on("value", snap => {
    // If waterTime is set to false rather than a time, stop the job.
    if (!snap.val().waterTime) {
        waterJob.stop();
    } else {
        const newCronTime = cronTime.everyDayAt(snap.time);
        waterJob.setTime(newCronTime);
        waterJob.start();
    }
})
