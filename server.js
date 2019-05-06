// boiler plate dependencies and express app
var express = require("express");
var path = requrie("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static allows for nonspecifc - specific searches. 
app.use(express.static("public"));

// app routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// listen PORT
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
