* Set up a firebase or AWS database.  When a user clicks a button, it sends 
a message such as "water my plant" to the database. 

* The pi will query the database on a regular basis using a cronjob.

* If it sees the message to water, it waters the plant, and sets the message
back to "don't water".



# A similar technique can be used for the images.

* Take an image on a regular basis

* Upload the image to a database

* When a user visits the page it will use a setInterval or something to update
the image on the same time basis.





# Set up whole project as a local demo version.
* Run local server with all things connected to simply run as a demo of how things work
* Have plant and light with you in a room to show the water pumping, turning
    the light on and off, etc etc.
* Running the whole program locally also allows you to live stream the camera.
* Use LIFX bulb as the light for the plant so that you can easily turn it 
    on and off with the program.
* Set up a function for the user to create a light schedule, this could create
    a cronjob based on their choices using a cronjob generator.

* Create light hanger using pvc pipes, attach pi and all hardware to a board
    that can connect to the pvc setup, and have a water resevoir also attached
    so that the entire setup is standalone minus the computer.  
    - This also shows how it could be mass produced.
    - Attach a fan to the raspberry Pi so that users can also turn the fan on 
        and off

