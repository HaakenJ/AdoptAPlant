# AdoptAPlant

AdoptAPlant is a web-based service that allows users to adopt plants for a monthly subscription. Users then being able to watch the plants via live streaming video, monitor environmental conditions, and toggle the lights or water the plant via the press of a button.

[Live Site](https://adoptaplant.herokuapp.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites and Installation

You will need a Raspberry Pi for this application.  Specifically, this application was created with a Raspberry Pi 4.  The parts needed 
in order to get a Raspberry Pi up and running will not be discussed here.

#### RasPi Parts List
    * DHT11 temperature and humidity sensor
    * A water pump (I used a 12V 3.6W fountain water pump made by Yeeco)
    * A breadboard and assorted dupont wires (jumpers and male-female)
    * Raspberry Pi Camera Module (I used the V2 8-megapixel version)
    * 5V Relay Module
    * 5V power supply for water pump
    * Capacitive Soil Moisture Sensor
    * MCP3008 Analog-to-Digital Converter
    * Hose from water pump to plant
    * Various basic gardening equipment (pot, soil, etc.)

I will not go into detail for how to wire up the different components, there are ample resources for this around the web.  

What you will need to do is connect the components to the proper ports on the Raspberry Pi though.  

#### RasPi Connections
    * DHT11 sensor needs to be connected to GPIO port #17
    * The water pump will need to be on GPIO port #27
    * Connect the Raspberry Pi SPI ports to the MCP3008 according to the below diagram with the data of the soil moisture sensor connected to channel 5.  Make sure to enable SPI in your raspi-config
        
<![MCP3008 Diagram](https://components101.com/sites/default/files/component_pin/MCP3008-ADC-Pinout.png)>

#### Camera Setup
    * Folow the below tutorial to set up your camera.
    * Get your Raspberry Pi's IP address and go to /client/src/components/PlantStream/index.js and set the src of the <img> element to your Raspberry Pi's IP address with port :8081 specified at the end.

[Tutorial](https://www.instructables.com/id/How-to-Make-Raspberry-Pi-Webcam-Server-and-Stream-/)

#### Firebase Setup
    * Create a Google Firebase account, a Realtime Database, and a new service account.
    * Download your service-account.json file and save it to the root folder.
    * Replace the "firebase.initializeApp" code in /controllers/logSensors, pumpQuery, and waterTimer with your own firebase app code.

#### Crontab Setup
    * Enter your crontab on your Raspberry Pi and set the /controllers/logSensors.js file to run at whatever interval you would like to log the sensor data.
    * Set both controllers/pumpQuery.js and waterTimer.js to run every minute, close the crontab then enter again to remove the lines for these two files.  
    This should set those files to run in the background to listen to firebase for changes.  

You can check whether these two processes are running by typing:
```
ps -aux
```
in your terminal.  You should see both files listed towards the bottom of the list.

Run
```
npm install
npm start
```
And you'll be up and running!

## Deployment

If you would like to have this site hosted via heroku or some other hosting service, you will need to forward port 8081 on your home network to allow the stream to be accessible.  
Do this at your own discression as it opens up many security concerns.

## Built With

* [Node.js](https://nodejs.org/en/) - Javascript Runtime
* [Express](https://expressjs.com/) - Node.js Web Framework
* [React](https://reactjs.org/) - JavaScript Library for User Interface
* [MongoDB](https://www.mongodb.com/) - NoSQL database service
* [Passport](http://www.passportjs.org/) - Node.js Authentication
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client
* [Firebase Realtime Database](https://firebase.google.com/) - Realtime cloud database

## Authors

* **Matthew Kiyoi** - [Mkkiyoi](https://github.com/Mkkiyoi)
* **Kyle Lamont** - [KyleRLamont](https://github.com/KyleRLamont)
* **Surenkhuu Shagdarsuren** - [slodway2019](https://github.com/slodway2019)
* **Kramer Johnson** - [HaakenJ](https://github.com/HaakenJ)

See also the list of [contributors](https://github.com/AdoptAPlant/contributors) who participated in this project.
