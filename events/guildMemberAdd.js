module.exports = (client, member) => {
    const welcomeRole = member.guild.roles.find("name", "New user");
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');

    if (!channel) return;

    try {
        // Give a role to a member
        member.addRole(welcomeRole)
            .then(channel.send(`Welcome to the RUSLAN server, ${member}`));
    } catch (error) {
        console.log(error);
    }









}