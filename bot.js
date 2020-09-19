require('dotenv').config();
const config = require('./config.json');
const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

fs.readdir("./events/", (err, files) => {
	files.forEach(file => {
		const eventHandler = require(`./events/${file}`);
		const eventName = file.split(".")[0]; // File name = eventName
		client.on(eventName, (...args) => eventHandler(client, ...args));
	});
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.prefix = config.prefix;

fs.readdir('./commands/', (err, files) => {
	if (err) console.error(err);
	const fileList = files
		.filter((type) => !type.includes('.test.'))
		.filter((fileName) => fileName.split('.').pop() === 'js');
	if (fileList.length <= 0) {
		return console.log('No commands have been loaded!');
	}
	fileList.forEach((file) => {
		const command = require(`./commands/${file}`);
		client.commands.set(command.config.name, command);
		command.config.aliases.forEach((alias) => {
			client.aliases.set(alias, command.config.name);
		});
		console.log(`Registered ${command.config.name} as a command.`);
	});
});

client.login(process.env.BOT_TOKEN);
