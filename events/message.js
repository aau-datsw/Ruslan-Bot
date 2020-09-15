require('dotenv').config();
const pleb = require('../commands/pleb.js');
const tutor = require('../commands/tutor.js');
const makeTutor = require('../commands/makeTutor.js');
const purgeBot = require('../commands/purgeBot.js');
const purgeMe = require('../commands/purgeMe.js');
const setup = require('../commands/setup.js');
const support = require('../commands/support.js');
const update = require('../commands/update.js');
const quickpurge = require('../commands/quickpurge.js');
const help = require('../commands/help.js');
const tournament = require('../commands/tournamentCommand.js');
const showTournaments = require('../commands/showTournaments.js');
//const smash = require('../commands/smash.js');
const nickname = require('../commands/nickname.js');
const Discord = require("discord.js");

module.exports = (client, message) => {
    const config = require('./../config.json');

    if (!message.content.startsWith(config.prefix) || message.author.bot) 
        return;

    if (message.channel.type === 'text') {
        command(message);
    }
    else if (message.channel.type === 'dm') {
        welcomeTutor(message);
    }
    return;
}

function command(message) {
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    const adminRole = message.member.guild.roles.cache.find(r => r.name === "Admin");
    const plannerRole = message.member.guild.roles.cache.find(r => r.name === "Ruslan Planlægger");
    const plebRole = message.member.guild.roles.cache.find(r => r.name === "Other");

    if (message.member.highestRole.comparePositionTo(adminRole) >= 0) {
        adminCommands(message, command, args);
    }

    if (message.member.highestRole.comparePositionTo(plannerRole) >= 0) {
        plannerCommands(message, command, args);
    }

    if (message.member.highestRole.comparePositionTo(plebRole) >= 0) {
        ruslingCommands(message, command);
    } else {
        welcomeCommands(message, command, args);
    }

    message.delete();
}

function adminCommands(message, command, args) {
    switch (command) {
        //case 'smash' :
        //    return smash(message, args);
        case 'purgebot':
            return purgeBot(message.channel);
        case 'purgeme':
            return purgeMe(message);
        case 'quickpurge':
            return quickpurge(message);
        case 'xd':
            return message.channel.send("8=====D o .");
        case 'begaxd':
            return message.channel.send("8===============D O o .");
        //spangdiller(message);
        default:
            break;
    }
}

function plannerCommands(message, command, args) {
    switch (command) {
        case 'setup':
            return setup(message, command, args);
        case 'update':
            return update(message, command, args);
        case 'maketutor':
            return makeTutor(message, args);
        default:
            break;
    }
}

function ruslingCommands(message, command) {

    switch (command) {
        case 'help':
            return help(message);
        case 'support':
            return support(message);
        case 'tournaments':
            return showTournaments(message);
        default:
            return tournament(message, command);
    }
}

function welcomeCommands(message, command, args) {
    switch (command) {
        case 'rusling':
        case 'other':
            if (message.member.nickname) {
                pleb(message);
            } else {
                message.reply(`${message.member.displayName} change your name(nickname), to your real name\nYou can use the command "!nickname YourNameHere"`);
            }
            return;
        case 'nickname':
            return nickname(message, args);
        case 'help':
            return help(message);
        default:
            break;
    }
}

function welcomeTutor(message) {
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();
    if (message.channel.recipient.id === message.author.id && command === 'tutor2005') {
        tutor(message);
    }
}
