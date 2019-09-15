const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find(ch => ch.name === 'bot-testing');
	console.log("New member!");
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the RUSLAN server, ${member}`);
});

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	const args = message.content.slice(1).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (command === 'ping') {
		message.channel.send('Pong.');
		console.log('Sent a pong!');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
		console.log('send a boop!');
	}
});
