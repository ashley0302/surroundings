const app = require("express")();
const express = require("express");
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function callback() {
    console.log("open: success");
});

mongoose
    .connect("mongodb://localhost/nearhere", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to database");
    })
    .catch(err => {
        console.log("not connected to database", err);
    });

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
//app.use(userCtrl.checkAuth);
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/create", (req, res) => {
    res.sendFile(__dirname + "/create.html");
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('userlocation', (loc) => {
        console.log(loc)
        socket.emit('userlocation', loc);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/api/marker", require("./api/marker"));



http.listen(3000, () => {
    console.log("Connected at 3000");
});