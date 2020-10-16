const Tournament = require("../models/tournament");
const fs = require("fs");
const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    const plannerRole = message.member.guild.roles.find(r => r.name === "Ruslan Planlægger");
    if (message.member.highestRole.comparePositionTo(plannerRole) >= 0) {
        if (args.length < 6) {
            message.channel.send("Please provide all arguments for tournament command update!")
            return;
        }

        updateTournamentCommand(command, args);
    } else {
        return;
    }
}

function updateTournamentCommand(command, args) {
    let data = fs.readFileSync('./tournaments.json');
    let tournaments = JSON.parse(data);
    var tId = tournaments.findIndex(x => x.commandName == args[0]);

    if (tId < 0) {
        return;
    }

    tournaments[tId].title = args[1];
    tournaments[tId].url = args[2];
    tournaments[tId].thumburl = args[3]
    tournaments[tId].responsable = args[4];
    tournaments[tId].description = args[5];

    fs.writeFile('./tournaments.json', JSON.stringify(tournaments, null, 2), 'utf8', function (err) {
        if (err) {
            console.log(err);
        }
    });
}



module.exports.config = {
    name: 'update',
    aliases: [],
    description: 'Updates the tournament file',
    permission: config.planner_role_id
}