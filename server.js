// Requiring in the necessary node packages
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./server/models");

// Initializing express and establishing the port the listener will use
var app = express();
var PORT = process.env.PORT || 5000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.urlencoded({ extended: false }));

// Establishing the bodyparser middleware to help parse json
app.use(bodyParser.json());

app.use(express.static("client/build"));

// Import routes and give the server access to them.
var routes = require("./server/controllers/controllers.js");
app.use("/", routes);

// Listener
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    })
});