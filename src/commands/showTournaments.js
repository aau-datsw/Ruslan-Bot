const Tournament = require("../models/tournament");
const fs = require("fs");
const config = require('../config.json');


module.exports.execute = async (client, message, args) => {
    let data = fs.readFileSync('./tournaments.json');

    if (data == "") {
        return;
    } else {
        tournaments = JSON.parse(data);
    }
    listCommands(tournaments, message);
}

function listCommands(tournaments, message) {
    var commands = "**Here is all the tournament commands:**\n";
    tournaments.forEach(t => {
        commands += "!" + t.commandName + " ";
    });
    message.channel.send(commands);
}



module.exports.config = {
    name: 'showtournaments',
    aliases: ['tournaments'],
    description: 'Huh?',
    permission: config.rusling_role_id
}