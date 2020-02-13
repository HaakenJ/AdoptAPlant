# Running server.js

* Getting error from routes/index.js that module ./api cannot be found.
    - Fixed

* MongooseTimeoutError: cannot connect to server - this may have to do
with the connection url. Not sure.
    - Issue was that the latest version of MongoDB Node.js driver that
    can be installed on Raspberrian operating system is v2.4.x.  This
    version in only compatibile with v4.x.x versions of mongoose.
    I have reverted our mongoose version to v4.13.19 which is listed
    as a stable version on the npm documentation.
        - This version of Mongoose does not contain the insertOne()
        function.  We must use .insert() instead.
    - Fixed

* Getting mongodb error: Mod on _id not allowed.
    - This is most likely resulting from a route that is updating
    something in the db and is being told to update the _id value
    as well.  Might also be from a unique value being updated.


# Front-end

* The container in middle of page extends into the nav-bar
* Getting Invalid Host error on Heroku.  This is due to the proxy
being used in production most, should only be used for dev mode.


# Still to do

* Write front-end routes for firebase and light
    - Light needs only a put request
    - Firebase will need a get reqest to get the sensor data
    - Firebase will need a post request for changing water pump
    command.

* Write front-end code to display light button and sensor data

* All ports can be changed back from 8888 since that isn't in use

* Decide if soil humidity should be displayed as a percentage or
if the words 'very dry', 'dry', 'damp', 'wet', 'very wet', etc
should be displayed depending on the percent range.
    - This depends on what we think is easiest for the user to 
    understand.

* Figure out what should be displayed on the page after the raspi
is no longer functional.

* Set up actual plant

* Presentation

* Documentation
