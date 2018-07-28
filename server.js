const mongoose = require("mongoose");
const axios = require("axios");
// const node = require("nodejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// defining router and assigning it to require the ConfirmationRoutes.js page enables use to use what is on that page
const router = require("./routes/ConfirmationRoutes")

// Define port
const PORT = 3000
// const PORT = process.env.PORT || 3000


// Mongoose connection
const db  = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected to mongodb - using test database.")
});

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(router);

// For test reasons, we utilize test database - use cities collections - inside should be city berkeey and attractions.
mongoose.connect("mongodb://localhost/test")

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// start the server
app.listen(PORT, function() {
    console.log("App is running on port " + PORT);
})