# Running server.js

* Getting error from routes/index.js that module ./api cannot be found.
* MongooseTimeoutError: cannot connect to server - this may have to do
with the connection url. Not sure.
    - Issue was that the latest version of MongoDB Node.js driver that
    can be installed on Raspberrian operating system is v2.4.x.  This
    version in only compatibile with v4.x.x versions of mongoose.
    I have reverted our mongoose version to v4.13.19 which is listed
    as a stable version on the npm documentation.
        - This version of Mongoose does not contain the insertOne()
        function.  We must use .insert() instead.


# Front-end

* The container in middle of page extends into the nav-bar


