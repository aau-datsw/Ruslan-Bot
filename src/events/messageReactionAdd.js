const config = require('../../config.json');

module.exports = {
    name: 'messageReactionAdd',
    once: false,
    async execute(messageReaction, user) {
        if(user.bot) return;

        try{
            const tutorRole = await messageReaction.message.guild.roles.fetch(config.tutor_role_id);
            const rusling = await messageReaction.message.guild.roles.fetch(config.rusling_role_id);
            const csgo = await messageReaction.message.guild.roles.fetch(config.csgo_role_id);
            const minecraft = await messageReaction.message.guild.roles.fetch(config.minecraft_role_id);
            const rocket = await messageReaction.message.guild.roles.fetch(config.rocket_role_id);
            const lol = await messageReaction.message.guild.roles.fetch(config.lol_role_id);
            const golf = await messageReaction.message.guild.roles.fetch(config.golf_role_id);
            const scribble = await messageReaction.message.guild.roles.fetch(config.scribble_role_id);
            const smash = await messageReaction.message.guild.roles.fetch(config.smash_role_id);

            const member = await messageReaction.message.guild.members.fetch(user.id)
            const msg = messageReaction.message;
            const channelId = messageReaction.message.channelId;

            if(channelId === config.WelcomeChannel){
                switch(messageReaction.emoji.name){
                    case "👍": 
                        if(!member.nickname){
                            member.send("Du skal have have et nickname (Dit rigtige navn), før du kan få adgang til serveren.");
                            messageReaction.message.reactions.resolve("👍").users.remove(user.id);
                            return;
                        }
                        member.roles.add(rusling);
                        member.send("Du har nu adgang til RUSLAN2021 serveren!");
                        break;
                    
                }
            }

            if(channelId === config.RolesChannel){
                switch(messageReaction.emoji.name){
                    case '🇨': member.roles.add(csgo); break;
                    case '🇲': member.roles.add(minecraft); break;
                    case '🇷': member.roles.add(rocket); break;
                    case '🇱': member.roles.add(lol); break;
                    case '🇬': member.roles.add(golf); break;
                    case '🇸': member.roles.add(scribble); break;
                    case '🥊': member.roles.add(smash); break;
                }
            }

            if(channelId === config.tutor_bump && msg.content.toLowerCase().includes("vil gerne have tutor rolle!") && msg.author.bot){
                const user = msg.mentions.members.first();
                if(messageReaction.emoji.name === "👍" && member.roles.highest.position > rusling.position) 
                    user.roles.add(tutorRole);
                else messageReaction.message.delete();
            }
        }catch(e){console.error}
    }
}