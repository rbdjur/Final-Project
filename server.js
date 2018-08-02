const mongoose = require("mongoose");
const axios = require("axios");

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
    console.log("we are connected to mongodb - using FinalProject database.")
});

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(router);

// For test reasons, we utilize test database - use cities collections - inside should be city berkeey and attractions.
// Make sure to run "mongod" inside terminal to turn on mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FinalProject");

// Alernate code of the code above connect to database 
// // Connect to the Mongo DB
// proess.env.MONGOD_URI is a part of connecting to the database, it is a heroku component that allows to be pushed to heroku
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");




const socket = require('socket.io');
const socketPORT = 3001

// socket.io server socket
server = app.listen(socketPORT, function (err) {
  if (err) throw err
  console.log('listening to socketPORT on port: ', socketPORT);
})

io = socket(server);

// initlization of socket
io.on('connection', (socket) => {
  console.log("Inside io.on.connection - returning socket.id: ", socket.id);

  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
})
});


// start the server.js
app.listen(PORT, function() {
    console.log("server.js for App.js is running on port " + PORT);
})