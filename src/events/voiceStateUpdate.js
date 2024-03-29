const config = require('../../config.json');
const newchat = require("../actions/newChat.js");

module.exports = {
    name: 'voiceStateUpdate',
    once: false,
    execute(oldState, newState) {
        const client = oldState.member.client;

        const supportChannel = client.channels.cache.get(config.support_channel_vc);
        const tutorRole = newState.guild.roles.cache.get(config.tutor_role_id);
        const tutorChat = client.channels.cache.get(config.tutor_bump);

        if (newState.channelId === config.support_channel_vc && (newState.member.roles.highest.comparePositionTo(tutorRole) < 0)){
            newState.member.send(`The tutors have been notified, and are on thier way to the support channel`);
            tutorChat.send(`${tutorRole} ${newState.member} needs help. Go to ${supportChannel}`);
        }

        if(newState.channelId === config.Create_New_vc || oldState.channel){
            if (newState.channelId === config.Create_New_vc)
                newchat.execute(client, newState);

            if (oldState.channel && oldState.channel.members.size === 0 && oldState.channel.name.includes("s chat"))
                oldState.channel.delete();
        }
    }
}
