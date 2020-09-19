const config = require('../config.json');

module.exports = (client, oldState, newState) => {
    const supportChannel = client.channels.cache.find(ch => ch.id === config.support_channel_vc);
    const tutorRole = newState.guild.roles.cache.find(rl => rl.id === config.planner_role_id);
    const tutorChat = client.channels.cache.find(ch => ch.id === config.tutor_channel);
    
    if (newState.channelID === supportChannel.id && (newState.member.roles.highest.comparePositionTo(tutorRole) < 0)){
        newState.member.send(`The tutors have been notified, and are on thier way to the support channel`);
        tutorChat.send(`${tutorRole} ${newState.member} needs help. Go to ${supportChannel}`);
    }
}