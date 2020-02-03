const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware Definitions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing
app.use(routes);

// Connect to the Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
