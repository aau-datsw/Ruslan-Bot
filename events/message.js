require('dotenv').config();

// Actions here
const tutor = require('../actions/tutor.js');

const config = require('./../config.json');


module.exports = async (client, message) => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.channel.type === 'text') {
        let command = message.content.slice(1).split(/\s+/g)[0];
        let args = message.content.slice(1).split(/\s+/g).shift();
        let commandFile = client.commands.get(command);
        if (commandFile) {
            if (message.member.roles.highest.comparePositionTo(commandFile.config.permission)) {
                await commandFile.execute(client, message, args);
            }
            return;
        }
        if (command) {
            client.commands.get(client.aliases.keyArray().forEach(alias => {
                if (command == alias || command.includes(alias)) {
                    commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(alias))
                }
            }));
            if (commandFile) {
                if (message.member.roles.highest.comparePositionTo(commandFile.config.permission)) {
                    await commandFile.execute(client, message, args);
                }
                return;
            }
        }
    }
    else if (message.channel.type === 'dm') {
        welcomeTutor(message);
    }
    return;
}

function welcomeTutor(message) {
    let secret = process.env.SECRET;
    if (message.channel.recipient.id === message.author.id && message.content.slice(1) === secret) {
        tutor.execute(message);
    }
}
