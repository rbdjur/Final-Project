const axios = require("axios");
const router = require("express").Router();
const path = require("path");

router.get("/Confirmation", (req, res) => {
    // res.send({ message: "hi"})
    res.sendFile(path.join(__dirname, "../Final-Project./client/src/App.js"));
    console.log("inside router.get on ConfirmationRoutes.js")
// }).then(function (response) {
//     res.send("hi");
//     console.log("This is the response" + response)
// }).catch(function (error) {
    // console.log("this is the catch error" + error)
});

module.exports = router;
