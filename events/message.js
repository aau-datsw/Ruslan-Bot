require('dotenv').config();
module.exports = (client, message) => {
    const config = require('./../config.json');

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    let channelID = message.channel.id;
    if (channelID == process.env.WELCOME_CHANNEL_ID)
    {
        welcomeCommands(client, message);
    } else if (channelID == process.env.SUPPORT_CHANNEL_ID)
    {
        supportCommands(client, message);
    }

}

function welcomeCommands(client, message) {
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    const welcomeChannel = client.channels.find(ch => ch.id === process.env.WELCOME_CHANNEL_ID);
    const roleChannel = client.channels.find(ch => ch.id === process.env.SUPPORT_CHANNEL_ID);
    const ruslingRole = message.member.guild.roles.find("name", "Rusling");

    switch (command) {
        case 'tutor':
            roleChannel.send(message.author + " wants to be tutor!");
            // No break, so tutor also becomes rusling
        case 'rusling':
            if (message.member.highestRole.comparePositionTo(ruslingRole) < 0) {
               // Give rusling role to a member
                message.member.addRole(ruslingRole)
                    .then(console.log(`${message.member}` + " is rusling"))
                    .catch(error => console.log(error));
            }
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
