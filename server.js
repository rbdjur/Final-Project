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
// Code below is alternate of code above
// const PORT = process.env.PORT || 3000

// Code Below are variables for socket.io
// var socket = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);




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
mongoose.connect("mongodb://localhost/FinalProject")

// Alernate code of the code above connect to database 
// // Connect to the Mongo DB
// proess.env.MONGOD_URI is a part of connecting to the database, it is a heroku component that allows to be pushed to heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Code below is for socket.io and the chat box theme.
// io.on('connection', function(socket){
//     console.log('a user connected');
//   });

const socket = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);




// start the server
app.listen(PORT, function() {
    console.log("App is running on port " + PORT);
})