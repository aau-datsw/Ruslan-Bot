const config = require('../../config.json');

module.exports = {
    name: 'messageReactionRemove',
    once: false,
    async execute(messageReaction, user) {
        if(user.bot) return;

        try{
            const csgo = await messageReaction.message.guild.roles.fetch(config.csgo_role_id);
            const minecraft = await messageReaction.message.guild.roles.fetch(config.minecraft_role_id);
            const rocket = await messageReaction.message.guild.roles.fetch(config.rocket_role_id);
            const lol = await messageReaction.message.guild.roles.fetch(config.lol_role_id);
            const golf = await messageReaction.message.guild.roles.fetch(config.golf_role_id);
            const scribble = await messageReaction.message.guild.roles.fetch(config.scribble_role_id);
            const smash = await messageReaction.message.guild.roles.fetch(config.smash_role_id);

            const member = await messageReaction.message.guild.members.fetch(user.id)
            const channelId = messageReaction.message.channelId;

            if(channelId === config.RolesChannel){
                switch(messageReaction.emoji.name){
                    case '🇨': member.roles.remove(csgo); break;
                    case '🇲': member.roles.remove(minecraft); break;
                    case '🇷': member.roles.remove(rocket); break;
                    case '🇱': member.roles.remove(lol); break;
                    case '🇬': member.roles.remove(golf); break;
                    case '🇸': member.roles.remove(scribble); break;
                    case '🥊': member.roles.remove(smash); break;
                }
            }
        }catch(e){console.error}
    }
}