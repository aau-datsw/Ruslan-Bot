module.exports = (client, message) => {
    const config = require('./../config.json');

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    const testChannel = client.channels.find(ch => ch.name === 'bot-testing');

    if (command === 'ping') {
        testChannel.send('Pong.');
        console.log('Sent a pong!');
    } else if (command === 'beep') {
        testChannel.send('Boop.');
        console.log('send a boop!');
    } else if (command === 'cs') {
        testChannel.send("CS MASTER!");
        console.log("a dj");
    }
}