module.exports = (client, oldMember, newMember) => {
    const supportChannel = client.channels.find(ch => ch.name === 'Join if you need help');
    const tutorRole = newMember.guild.roles.find(rl => rl.name === 'Ruslan Planlægger');
    const tutorChat = client.channels.find(ch => ch.name === 'tutor-chat');
    console.log(newMember.highestRole);
    if (newMember.voiceChannel === supportChannel && newMember.highestRole.comparePositionTo(tutorRole)){
        newMember.send(`The tutors have been notified, and are on thier way to the support channel`);
        tutorChat.send(`${tutorRole} ${newMember} needs help. Go to <#${supportChannel.id}>`);
    }
}