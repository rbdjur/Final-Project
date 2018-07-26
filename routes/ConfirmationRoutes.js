const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send({ message: "hi"})
    console.log("inside router.get on ConfirmationRoutes.js")
// }).then(function (response) {
//     res.send("hi");
//     console.log("This is the response" + response)
// }).catch(function (error) {
    // console.log("this is the catch error" + error)
});

module.exports = router;
