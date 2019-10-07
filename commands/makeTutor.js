module.exports = (message, args) => {
    const tutorRole = message.member.guild.roles.find(r => r.name === "Tutor");
    try {
        if (args.length > 0) {
            args.forEach(name => {
                member = message.guild.members.find(member => member.displayName === name);
                member.addRole(tutorRole)
                    .then(message.channel.send(`${member.displayName} is tutor`))
                    .catch(error => console.log(error));
            });
        } else {
            message.channel.send('Provide mentions in arguments');
        }
    } catch (error) {
        console.log(error);
    }
    
}