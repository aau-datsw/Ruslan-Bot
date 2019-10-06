module.exports = message => {
    const mentions = message.mentions.members;
    const tutorRole = message.member.guild.roles.find(r => r.name === "Tutor");

    console.log(mentions);
    if (mentions.size > 0){
        mentions.forEach(member => {
            member.addRole(tutorRole)
                .then(message.channel.send(`${member.displayName} is tutor`))
                .catch(error => console.log(error));
        });
        //purgeChannelforBot(message.channel);
    } else
    {
        message.channel.send('Provide mentions in arguments');
    }
    return;
}