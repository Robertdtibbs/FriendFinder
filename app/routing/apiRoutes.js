
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        var userInput = req.body;
        var userName = userInput.name;
        var userScores = userInput.scores;
        var diff = 0;
        var match = {
            name: "",
            photo: "",
            matchDiff: 1000,
        };

        var parsedScore = userScores.map(function(item){
            return parseInt(item, 10)
        });
        userInput = {
            name: req.body.name,
            photo: req.body.photo,
            scores: parsedScore,
        };

        console.log("Name: " + userName);
        console.log("User score " + userScores)

        var sum = parsedScore.reduce((a, b) => a+b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + match.matchDiff)

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name)
            diff = 0;
            var bestMatch = friends[i].scores.reduce((a, b) => a + b, 0);
            diff += Math.abs(sum - bestMatch)

            if (diff < match.matchDiff) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.matchDiff = diff;
            }

            diff = 0;
        }
        console.log(match)
        friends.push(userInput);
        console.log("New Friend Added.")
        console.log(userInput)
        res.json(match);
    })
}