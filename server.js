const mongoose = require("mongoose");
const axios = require("axios");
const node = require("nodejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parse");







const PORT = 3000


const db  = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected to mongodb - using test database.")

});

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a static folder (public) for our web app
app.use(express.static("public"));


// For test reasons, we utilize test database - use cities collections - inside should be city berkeey and attractions.
mongoose.connect("mongodb://localhost/test")


// start the server
app.listen(PORT, function() {
    console.log("App is running on port" + PORT);
})