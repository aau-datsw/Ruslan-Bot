
const Discord = require('discord.js');
const config = require('../../config.json')
const welcome_embed = require('../welcome_embed.json')

module.exports.execute = async (client) => {
    const channel = client.channels.cache.find(ch => ch.id === config.WelcomeChannel); // change to env file id
    fetchedMessages = await channel.messages.fetch(100);
    await channel.bulkDelete(channel.messages.cache, false).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(() => fetchedMessages.forEach(message => message.delete()))        
    
    
    channel.send({embed: welcome_embed});
}
