const config = require('../../config.json')
const welcome_embed = require('../welcome_embed.json')

module.exports.execute = async (client) => {
    const channel = await client.channels.fetch(config.WelcomeChannel); 

    let fetchedMessages;
    fetchedMessages = await channel.messages.fetch({limit: 100});
    fetchedMessages.forEach(msg => msg.delete());
    
    channel.send({embeds: [welcome_embed]});
}
