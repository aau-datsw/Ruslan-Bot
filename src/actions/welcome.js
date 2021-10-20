const config = require('../../config.json')
const welcomeEmbed = require('../embeds/welcome.json')
const rolesEmbed = require('../embeds/roles.json');

module.exports.execute = async (client) => {
    try{
        const ch = {
            welcomeChannel: await client.channels.fetch(config.WelcomeChannel),
            rolesChannel: await client.channels.fetch(config.RolesChannel)
        };
        
        Object.values(ch).forEach(fetchMessages);
        
        const welcomeMessage = await ch.welcomeChannel.send({embeds: [welcomeEmbed]});
        const rolesMessage = await ch.rolesChannel.send({embeds: [rolesEmbed]});
        welcomeMessage.react('👍');
        rolesMessage.react('<:csgo:900113749480988682>');
        rolesMessage.react('<:minecraft:900114953585963061>');
        rolesMessage.react('<:rocket_league:900112982787387482>');
        rolesMessage.react('<:league:900113425726857216>');
        rolesMessage.react('<:golf_with_friends:900113907144851456>');
        rolesMessage.react('<:scribble:900114465574498334>');
        rolesMessage.react('<:smash:900114645560479777>');
    }catch(e){console.error}
}

async function fetchMessages(channel){
    let fetchedMessages;
    fetchedMessages = await channel.messages.fetch({limit: 100});
    fetchedMessages.forEach(msg => msg.delete());
}