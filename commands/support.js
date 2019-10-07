module.exports = (member) => {
    try {
        const tutorRole = member.guild.roles.find(rl => rl.name === 'Ruslan Planlægger');
        const tutorChat = member.guild.channels.find(ch => ch.name === 'tutor-chat');
        console.log(member.voiceChannelID);
        if (member.voiceChannelID){
            member.setVoiceChannel('626766461636968450'); //help voice channel
        } else {
            member.reply("Go to the voice channel ->'<#626766461636968450>' to get live support");
        }
        tutorChat.send(`${tutorRole} ${member} needs help. Go to <#626766461636968450>`);
    } catch (error) {
        console.log(error);
    }
}