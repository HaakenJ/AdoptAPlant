* Set up port forwarding on port 80 for web server.
    - May be good idea to use CloudFare or NOIP with a domain name
    - Possibly set up Fail2Ban but may not be necessary for web server.
* Also set up port forwarding on port 8081 for live stream.
    - We will have a link to this page to see the live stream.


* Ask Brennon if he thinks this is a safe and practical approach.

* How does he host from raspi?
* How do I connect outside of the network?  Can I use the static IP 
that I assigned to my pi like so 10.0.0.128:80 to actually load the page?
* If it is set up with a domain name, is that name connected to that static
IP address so that the domain name gets converted to 10.0.0.128:80?
* Should I get SSL set up on the server?


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

