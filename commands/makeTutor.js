module.exports = (message, args) => {
    const tutorRole = message.member.guild.roles.find(r => r.name === "Tutor");
    try {
        if (args.length > 0) {
            args.forEach(name => {
                member = message.guild.members.find(member => member.displayName === name);
                member.addRole(tutorRole)
                    .then(message.channel.send(`${member.displayName} has become tutor`))
                    .catch(error => console.log(error));
            });
        } else {
            message.channel.send('Provide mentions in arguments');
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports.config = {
    name: 'makeTutor',
    aliases: ['tutor'],
    description: 'Makes a given user a tutor',
}