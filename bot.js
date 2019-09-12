const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'bepp') {
		message.channel.send('Boop.');
	}
});
