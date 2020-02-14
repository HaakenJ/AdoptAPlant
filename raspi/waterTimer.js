Set an event listener to firebase for the pump time command
to change.

On any change to this time, convert the time to cron syntax
schedule a node-cron job using the converted syntax and start
the job.

The script should stay open as long as this job is scheduled.

There should be a way to notify the user what schedule the 
light is currently on and provide a cancel button to end the 
task.

The cancel command will be stored in commands on firebase.

Event listener will wait for cancel to change to true then it
will run task.stop()

Once a start button is pressed, cancel is changed to false,
the script gets the current time stored in the pump time on
firebase, then starts a task with that time until the time 
when cancel is pressed again.
