const config = require('../config.json');
const Discord = require('discord.js');
const fs = require('fs');

module.exports.execute = async (client, message, args) => {
    let json;
    try {
        json = JSON.parse(fs.readFileSync('./draws.json'));
    } catch (e) {
        message.reply('Der er desværre ikke nogen aktive lodtrækninger lige nu...');
        console.log(e)
        return;
    }
    let msgEmbed = new Discord.MessageEmbed();
    msgEmbed.setTitle('Lodtrækninger');
    json.draws.forEach(element => {
        msgEmbed.addField(element.name, `${element.description}\n\n${element.participants.length} personer deltager!`);
    });
    message.channel.send(msgEmbed)

}

module.exports.config = {
    name: 'lodtrækninger',
    aliases: ['draws', 'ds'],
    description: 'Gives a list of all available draws!',
    permission: config.rusling_role_id
}