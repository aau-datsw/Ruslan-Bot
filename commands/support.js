module.exports = (message) => {
    try {
        const member = message.member;
        const supportChannel = member.guild.channels.find(ch => ch.name ==='Join if you need help');

        if (member.voiceChannel){
            member.setVoiceChannel(supportChannel); //help voice channel
        } else {
            message.reply(`Go to the voice channel ->'<#${supportChannel.id}>' to get live support`);
        }
    } catch (error) {
        console.log(error);
    }
}
