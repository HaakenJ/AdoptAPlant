const express = require("express");
const passport = require('passport');
const session = require('express-session');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session)
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');


// Middleware Definitions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PassportJS
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adoptaplant" || "mongodb://10.0.0.128:8888/adoptaplant", {useNewUrlParser: true, useUnifiedTopology: false});

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

// // Adding CORS to all routing.
// app.use(cors({
//   origin: 'http://localhost:3000/'
// }));
// app.options('http://localhost:3000/', cors());

app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
