const config = require('../config.json');
const newchat = require("../actions/newChat.js");

module.exports = (client, oldState, newState) => {
    const supportChannel = client.channels.cache.find(ch => ch.id === config.support_channel_vc);
    const tutorRole = newState.guild.roles.cache.find(rl => rl.id === config.planner_role_id);
    const tutorChat = client.channels.cache.find(ch => ch.id === config.tutor_channel);
    const createNew = client.channels.cache.find(ch => ch.id === config.Create_New_vc);
    const createNewCat = client.channels.cache.find(ch => ch.id === config.GameroomCategory);

    
    
    if (newState.channelID === supportChannel.id && (newState.member.roles.highest.comparePositionTo(tutorRole) < 0)){
        newState.member.send(`The tutors have been notified, and are on thier way to the support channel`);
        tutorChat.send(`${tutorRole} ${newState.member} needs help. Go to ${supportChannel}`);
    }

    if(newState.channelID === createNew.id || oldState.channel.parent.id === createNewCat.id){
        console.log("Updated create new channel \n");
        if (newState.channelID === createNew.id){

            newchat.execute(client, newState);
        }
        if (oldState.channel == null){
            return;
        }
        if (oldState.channel.members.size === 0){
            if(oldState.channelID === createNew.id || oldState.channel.parent.id !== createNewCat.id){
                return;
            }
            oldState.channel.delete();
        }
    }

    
        
        
}