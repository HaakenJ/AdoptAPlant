const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware Definitions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PassportJS
let passport = require('passport');
let session = require('express-session');

app.use(session({
  secret: 'tutors are awesome',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
  require('./config/passport');

// Static Assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing
app.use(routes);

// Connect to the Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adoptaplant");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
