module.exports = (client, message) => {
    const config = require('./../config.json');

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    const testChannel = client.channels.find(ch => ch.name === 'bot-testing');
    const welcomeChannel = client.channels.find(ch => ch.name === 'welcome');
    const ruslingRole = message.member.guild.roles.find(role => { return role.name === "Rusling" });

    if (command === 'ping') {
        testChannel.send('Pong.');
        console.log('Sent a pong!');
    } else if (command === 'beep') {
        testChannel.send('Boop.');
        console.log('send a boop!');
    } else if (command === 'cs') {
        testChannel.send("CS MASTER!");
        console.log("a dj");
    } else if (command === 'rusling') {
        if (message.member.highestRole.comparePositionTo(ruslingRole) > 0) {
            purgeWelcomeChannel(client);
            return;
        }
        // Give rusling role to a member
        message.member.addRole(ruslingRole)
            .then(console.log(`${message.member}` + " is rusling"))
            .catch(error => console.log(error));
        purgeWelcomeChannel(client);
    } else if (command === 'tutor') {
        testChannel.send(message.member + " wants to be tutor!");
    }
}

function purgeWelcomeChannel(client) {
    try {
        const welcomeChannel = client.channels.find(ch => ch.name === 'welcome');
        welcomeChannel.fetchMessages({ limit: 100 }).then(f => {
            welcomeChannel.bulkDelete(f.filter(fetchedMsg => !fetchedMsg.pinned), true);
        }).catch(error => console.log(error));
    } catch (err) {
        console.error(err);
    }
}