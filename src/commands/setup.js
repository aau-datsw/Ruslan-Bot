const Tournament = require("../models/tournament");
const fs = require("fs");
const config = require('../config.json');


module.exports.execute = async (client, message, args) => {
    const plannerRole = message.member.guild.roles.cache.find(r => r.name === "Ruslan Planlægger");

    if (message.member.highestRole.comparePositionTo(plannerRole) >= 0) {
        if (args.length < 6) {
            message.channel.send("Please provide all arguments for tournament command setup!")
            return;
        }

        var t = new Tournament(args[0], args[1], args[2], args[3], args[4], args[5]);

        addTournamentCommand(t, message);
    } else {
        return;
    }
}

function addTournamentCommand(tournament, message) {
    let data = fs.readFileSync('./tournaments.json');
    let tournaments = [];

    if (data != "") {
        tournaments = JSON.parse(data);
    } else {
        return;
    }

    if (!tournaments.some(t => t.commandName == tournament.commandName)) {
        tournaments.push(JSON.parse(JSON.stringify(tournament)));

        fs.writeFile('./tournaments.json', JSON.stringify(tournaments), 'utf8', err => {
            if (err) {
                console.log(err);
            }
            console.log("Tournament has been saved.");
        });
    } else {
        message.channel.send("This command already exists!")
        return;
    }
}



module.exports.config = {
    name: 'setup',
    aliases: [],
    description: 'Creates the necessary files for the bot',
    permission: config.admin_role_id
}