const { Console } = require("console");
const express = require("express");
const app = express();

app.use(express.static(__dirname+"/public"));

//send to webpage
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get("/ContactUs", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});

//
app.post("/", function (req, res) {
    res.send("thanks");
});

//creating server
app.listen(3000, function () {
    console.log("Server has Started at port 3000");
});
//website
//ds algo
