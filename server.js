const express = require("express");
let passport = require('passport');
let session = require('express-session');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session)
const routes = require("./routes");
const PORT = process.env.PORT || 8888;
const app = express();

// Middleware Definitions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PassportJS

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adoptaplant", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(session({
  secret: 'plants are awesome',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: true
}));



// Static Assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing
app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
