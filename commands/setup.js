const Tournament = require("../models/tournament");
const fs = require("fs");

module.exports = (message, command, args) => {
    const plannerRole = message.member.guild.roles.find(r => r.name === "Ruslan Planlægger");
    if (message.member.highestRole.comparePositionTo(plannerRole) >= 0) {
        if (args.length < 5) {
            message.channel.send("Please provide all arguments for tournament command setup!")
            return;
        }

        // TODO: Check if command with commandName exists! <3

        var t = new Tournament(args[0], args[1], args[2], args[3], args[4]);

        addTournamentCommand(t);
    } else {
        return;
    }
}

function addTournamentCommand(tournament) {
    let data = fs.readFileSync('./tournaments.json');
    let tournaments = [];

    if (data != "") {
        tournaments = JSON.parse(data);
    } else {
        return;
    }

    tournaments.push(JSON.parse(JSON.stringify(tournament)));

    fs.writeFile('./tournaments.json', JSON.stringify(tournaments), 'utf8', err => {
        if (err) {
            console.log(err);
        }
        console.log("Tournament has been saved.");
    });
}