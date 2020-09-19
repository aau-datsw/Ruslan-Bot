require('dotenv').config();

// Actions here
const tutor = require('../actions/tutor.js');


const pleb = require('../commands/pleb.js');
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

const config = require('./../config.json');


module.exports = async (client, message) => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.channel.type === 'text') {
        let command = message.content.slice(1).split(/\s+/g)[0];
        let args = message.content.slice(1).split(/\s+/g).shift();
        let commandFile = client.commands.get(command);
        if (commandFile) {
            await commandFile.execute(client, message, args);
            return;
        }
        if (command) {
            client.commands.get(client.aliases.keyArray().forEach(alias => {
                if (command == alias || command.includes(alias)) {
                    commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(alias))
                }
            }));
            if (commandFile) {
                await commandFile.execute(client, message, args);
                return;
            }
        }
    }
    else if (message.channel.type === 'dm') {
        welcomeTutor(message);
    }
    return;
}

// function command(message) {
//     const args = message.content.slice(1).split(/ +/);
//     const command = args.shift().toLowerCase();

//     const adminRole = message.member.guild.roles.cache.find(r => r.id === config.admin_role_id);
//     const plannerRole = message.member.guild.roles.cache.find(r => r.id === config.planner_role_id);
//     const ruslingRole = message.member.guild.roles.cache.find(r => r.id === config.rusling_role_id);

//     if (message.member.roles.highest.comparePositionTo(adminRole) >= 0) {
//         adminCommands(message, command, args);
//     }

//     if (message.member.roles.highest.comparePositionTo(plannerRole) >= 0) {
//         plannerCommands(message, command, args);
//     }

//     if (message.member.roles.highest.comparePositionTo(ruslingRole) >= 0) {
//         ruslingCommands(message, command);
//     } else {
//         welcomeCommands(message, command, args);
//     }

//     message.delete();
// }

// function adminCommands(message, command, args) {
//     switch (command) {
//         //case 'smash' :
//         //    return smash(message, args);
//         case 'purgebot':
//             return purgeBot(message.channel);
//         case 'purgeme':
//             return purgeMe(message);
//         case 'quickpurge':
//             return quickpurge(message);
//         case 'xd':
//             return message.channel.send("8=====D o .");
//         case 'begaxd':
//             return message.channel.send("8===============D O o .");
//         //spangdiller(message);
//         default:
//             break;
//     }
// }

// function plannerCommands(message, command, args) {
//     switch (command) {
//         case 'setup':
//             return setup(message, command, args);
//         case 'update':
//             return update(message, command, args);
//         case 'maketutor':
//             return makeTutor(message, args);
//         default:
//             break;
//     }
// }

// function ruslingCommands(message, command) {

//     switch (command) {
//         case 'help':
//             return help(message);
//         case 'support':
//             return support(message);
//         case 'tournaments':
//             return showTournaments(message);
//         default:
//             return tournament(message, command);
//     }
// }

// function welcomeCommands(message, command, args) {
//     switch (command) {
//         case 'rusling':
//         case 'other':
//             if (message.member.nickname) {
//                 pleb(message);
//             } else {
//                 message.reply(`${message.member.displayName} change your name(nickname), to your real name\nYou can use the command "!nickname YourNameHere"`);
//             }
//             return;
//         case 'nickname':
//             return nickname(message, args);
//         case 'help':
//             return help(message);
//         default:
//             break;
//     }
// }

function welcomeTutor(message) {
    let secret = process.env.SECRET;
    if (message.channel.recipient.id === message.author.id && message.content.slice(1) === secret) {
        tutor.execute(message);
    }
}
