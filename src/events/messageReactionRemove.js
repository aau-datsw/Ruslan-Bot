const config = require('../../config.json');

module.exports = {
    name: 'messageReactionRemove',
    once: false,
    async execute(messageReaction, user) {
        if(user.bot) return;
        const csgo = await messageReaction.message.guild.roles.fetch(config.csgo_role_id);
        const minecraft = await messageReaction.message.guild.roles.fetch(config.minecraft_role_id);

        const member = await messageReaction.message.guild.members.fetch(user.id)
        const channelId = messageReaction.message.channelId;

        if(channelId === config.RolesChannel){
            switch(messageReaction.emoji.name){
                case '🇨': member.roles.remove(csgo); break;
                case '🇲': member.roles.remove(minecraft); break;
            }
        }
    }
}