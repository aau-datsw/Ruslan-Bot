require('dotenv').config();
const rusling = require('../commands/rusling.js');
const tutor = require('../commands/tutor.js');
const makeTutor = require('../commands/makeTutor.js');
const purgeBot = require('../commands/purgeBot.js');
const purgeMe = require('../commands/purgeMe.js');

module.exports = (client, message) => {
    const config = require('./../config.json');

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.channel.type === 'text')
    {
        command(message);
    }
    else if (message.channel.type === 'dm')
    {
        welcomeTutor(message);
    }
    return;
}
function command(message){
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    const adminRole = message.member.guild.roles.find(r => r.name === "Admin");
    const tutorRole = message.member.guild.roles.find(r => r.name === "Tutor");
    const ruslingRole = message.member.guild.roles.find(r => r.name === "Rusling");

    if (message.member.highestRole.comparePositionTo(adminRole) >= 0) {
        adminCommands(message, command);
    }
    if (message.member.highestRole.comparePositionTo(tutorRole) >= 0) {
        tutorCommands(message, command);
    }
    if (message.member.highestRole.comparePositionTo(ruslingRole) >= 0) {
        ruslingCommands(message, command);
    }
    else {
        welcomeCommands(message, command);
    }
}

function adminCommands(message, command) {

    switch (command) {
        case 'purgebot':
            purgeBot(message.channel);
            break;
        case 'purgeme':
            purgeMe(message);
            break;
        default:
            break;
    }
}
 

function tutorCommands(message, command){
    switch (command) {
        case 'maketutor':
            makeTutor(message);
            break;
        default:
            break;
    }
}


function ruslingCommands(message, command) {

    switch (command) {
        case'help':
            break;
        case 'cs':
            //cs(message);
            break;
        case 'lol':
            // lol(message);
            break;
        default:
            break;
    }
}

function welcomeCommands(message, command) {

    switch (command) {
        case 'rusling':
            rusling(message);
            break;
        default:
            break;
    }
    purgeChannelforAuthor(message);
}

function welcomeTutor(message){
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(message);
    console.log("\n" + command);
    if (message.channel.recipient.id === message.author.id && command === 'tutor2005')
    {
        tutor(message);
    }

}

