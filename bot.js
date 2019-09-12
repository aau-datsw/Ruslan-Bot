const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(auth.token);

if (message.content === '!ping')  {
    message.channel.send('pong.');
}
