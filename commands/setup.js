const Tournament = require("../models/tournament");
const fs = require("fs");

module.exports = (message, command, args) => {
    if (args.length < 5) {
        message.channel.send("Please provide all arguments for tournament command setup!")
        return;
    }

    var t = new Tournament(args[0], args[1], args[2], args[3], args[4]);
    addTournamentCommand(t);

}

function addTournamentCommand(tournament) {
    let data = fs.readFileSync('./tournaments.json');
    let tournaments = JSON.parse(data);
    tournaments.push(JSON.parse(JSON.stringify(tournament)));
    fs.writeFile('./tournament.json', tournaments);
}