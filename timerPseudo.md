Have a button to turn on and off the timer
  - This will set commands/time/runJob to true or false
  - Need route to toggle schedule

Have a dropdown to select a time
  - This will set commands/time/waterAt to the time selected

Display the time if the schedule is running
  - Check if runJob is set to true
  - If so, get the waterAt time
  - Display the waterAt time
  - If not, let the user know there is no schedule running
  and display the start schedule button.

This requires methods to check the commands/time section
  - Either one method for each runJob and waterAt or one to
  retrive the whole object.

/set-time sets the waterAt time
/toggle-job toggles the value of runJob from true or false
/get-time returns runJob and waterAt values
