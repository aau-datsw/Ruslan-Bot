require('dotenv').config();
const fileNeedsUpdating = require('./fileNeedsUpdating.js')

const path = require('path');
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS
	]
});

const eventFiles = fs.readdirSync(path.resolve(__dirname,'./events'))
	.filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`${path.resolve(__dirname,'./events')}/${file}`);

	if (event.once) client.once(event.name, (...args) => event.execute(...args));
 	else client.on(event.name, (...args) => event.execute(...args));
	
	console.log(file);
}

client.commands = new Collection();
const commandFiles = fs.readdirSync(path.resolve(__dirname, "./commands"))
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`${path.resolve(__dirname, "./commands")}/${file}`);
	if(fileNeedsUpdating(file)) {
		console.log(`${file} skal opdateres`);
	} else {
		client.commands.set(command.data.name, command);
	}
}

client.login(process.env.BOT_TOKEN);