var path = require('path');
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var userInput = req.body;

        var userResponse = userInput.scores;

        var matchName ="";
        var matchImage ="";
        var totalDiff = 10000;

        for(var i = 0; i < friends.length; i++){
             var diff = 0;

             for(var i = 0; i < userResponse; i ++){
                 diff += Math.abs(friends[i].scores[x])
             }

             if(diff < totalDiff){
                 totalDiff = diff;
                 matchName = friends[i].name;
                 matchImage = friends[i].photo;
             }
        }
        friends.push(userInput);

        res.json({status: "Ok", matchName: matchName, matchImage: matchImage});
    })
}