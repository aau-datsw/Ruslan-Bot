const welcome = require('../commands/welcome');

module.exports = (client, member) => {
    const welcomeRole = member.guild.roles.find(r => r.name === "New user");
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    try {
        member.addRole(welcomeRole)
            .then(channel.send(welcome(member))
            );
    } catch (error) {
        console.log(error);
    }
    channel.send("efter catch");
    
}