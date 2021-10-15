const config = require('../../config.json')
const welcomeEmbed = require('../embeds/welcome.json')
const rolesEmbed = require('../embeds/roles.json');

module.exports.execute = async (client) => {
    try{
        const ch = {
            welcomeChannel: await client.channels.fetch(config.WelcomeChannel),
            rolesChannel: await client.channels.fetch(config.RolesChannel),
            csgoChannel: await client.channels.fetch(config.csgoChannel),
            minecraftChannel: await client.channels.fetch(config.minecraftChannel)
        };
        
        Object.values(ch).forEach(fetchMessages);
        
        const welcomeMessage = await ch.welcomeChannel.send({embeds: [welcomeEmbed]});
        const rolesMessage = await ch.rolesChannel.send({embeds: [rolesEmbed]});
        welcomeMessage.react('👍');
        rolesMessage.react('🇨');
        rolesMessage.react('🇲');
    }catch(e){console.error}
}


async function fetchMessages(channel){
    let fetchedMessages;
    fetchedMessages = await channel.messages.fetch({limit: 100});
    fetchedMessages.forEach(msg => msg.delete());
}