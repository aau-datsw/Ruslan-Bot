module.exports = (client, member) => {
    const channel = member.guild.channels.find(ch => ch.name === 'bot-testing');
    //console.log(`New member: ${member.name}`);
    if (!channel) return;

    channel.send(`Welcome to the RUSLAN server, ${member}`);
}