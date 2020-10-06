const Tournament = require("../models/tournament");
const fs = require("fs");
const Discord = require("discord.js");

module.exports.execute = async (client, message, args) => {
    let data = fs.readFileSync('./tournaments.json');

    if (data == "") {
        return;
    } else {
        tournaments = JSON.parse(data);
    }

    var tournament = tournaments.find(t => t.commandName == command);

    if (tournament) {
        sendRichEmbed(tournament, message);
    }
}

function sendRichEmbed(tournament, message) {
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor(tournament.color)
        .setTitle(tournament.title)
        .addField("Link to battlfy:", tournament.url)
        .addField("Coordinator(s):", tournament.responsable, true)
        .setThumbnail(tournament.thumburl)
        .setDescription(tournament.description)
    message.channel.send(exampleEmbed);
}



module.exports.config = {
    name: 'tournament',
    aliases: [],
    description: 'Gets information about a tournament',
}