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



