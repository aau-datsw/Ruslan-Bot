const Tournament = require("../models/tournament");
const fs = require("fs");

module.exports = (message) => {
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
