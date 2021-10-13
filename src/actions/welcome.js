const config = require('../../config.json')
const welcome_embed = require('../welcome_embed.json')

module.exports.execute = async (client) => {
    const welcomeChannel = await client.channels.fetch(config.WelcomeChannel); 
    const rolesChannel = await client.channels.fetch(config.RolesChannel);

    let fetchedMessages;
    fetchedMessages = await welcomeChannel.messages.fetch({limit: 100});
    fetchedMessages.forEach(msg => msg.delete());
    fetchedMessages = await rolesChannel.messages.fetch({limit: 100});
    fetchedMessages.forEach(msg => msg.delete());
    
    const welcomeMessage = await welcomeChannel.send({embeds: [welcome_embed]});
    const rolesMessage = await rolesChannel.send({content: "roles"});
    welcomeMessage.react('👍');
    rolesMessage.react('🇨');
    rolesMessage.react('🇲');


}
