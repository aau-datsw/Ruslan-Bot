require('dotenv').config();
const rusling = require('../commands/rusling.js');
const tutor = require('../commands/tutor.js');
const makeTutor = require('../commands/makeTutor.js');


module.exports = (client, message) => {
    const config = require('./../config.json');

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (client.channels.find(channel => channel.name === 'welcome'))
    {
        if (message.member.nickname) {
            welcomeCommands(client, message);
        } else {
            console.log("'\t" + message.member.displayName + "' tried to join the server without a nickname");
        }
    } else if (client.channels.find(channel => channel.name === 'tutor-bump'))
    {
        supportCommands(client, message);
    }

}

function welcomeCommands(client, message) {
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();    

    switch (command) {
        case 'tutor2005':
            tutor(message);
            break;
        case 'rusling':
            rusling(message);
            break;
        default:
            break;
    }
    purgeChannelforAuthor(message);
    return;
}

function supportCommands (client, message){
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();    

    switch (command) {
        case 'makeTutor':
            makeTutor(message);
            break;
        default:
            break;
    }

}

function purgeChannelforAuthor(message) {
    try {
        const purgeChannel = message.channel;
        purgeChannel.fetchMessages({ limit: 100 }).then(allMsg => {
            const allMsgByAuthor = allMsg.filter(fetchedMsg => fetchedMsg.author === message.author);
            purgeChannel.bulkDelete(allMsgByAuthor, true);
        })
            .catch(error => console.log(error));
    } catch (err) {
        console.error(err);
    }
}

