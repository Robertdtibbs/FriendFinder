
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        
      var userInput = req.body;
        var diff = 0;
        var smallest = 90;
        var matchID = "";

        for(var i = 0; i < friends.length; i++){

             for(var t = 0; t < 10; t ++){
                 diff += Math.abs(friends[z].scores[i] - userInput.scores[i]);
             }

             if(diff < smallest){
                 smallest = diff;
                 matchID = z;
             }
            
          diff = 0;
        }
        friends.push(userInput);

        res.json(friends[matchID]);
    })
}