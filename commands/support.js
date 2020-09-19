const config = require('../config.json');

module.exports = (message) => {
    try {
        const member = message.member;
        const supportChannel = member.guild.channels.find(ch => ch.id === config.support_channel_vc);

        if (member.voiceChannel){
            member.setVoiceChannel(supportChannel); //help voice channel
        } else {
            message.reply(`Go to the voice channel ->'<#${config.support_channel_vc}>' to get live support`);
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports.config = {
    name: 'support',
    aliases: [],
    description: 'Gives instructions on what to do if you need help',
}
