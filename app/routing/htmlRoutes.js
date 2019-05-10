// Required dependencies
var path = require("path");


// Export HTML Routes
module.exports = function(app) {

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};