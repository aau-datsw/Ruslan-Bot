const Discord = require('discord.js');

module.exports = message => {
    const adminRole = message.member.guild.roles.find(r => r.name === "Admin");
    const plannerRole = message.member.guild.roles.find(r => r.name === "Ruslan Planlægger");
    const ruslingRole = message.member.guild.roles.find(r => r.name === "Rusling");

    const helpEmbed = new Discord.RichEmbed()
        .setColor('#ffc800')
        .setTitle("**Commands**")
        .setDescription(`These are the different commands to use for **${message.member.highestRole.name}**:`);

    if (message.member.highestRole.comparePositionTo(adminRole) >= 0) {
        newCommand("purgebot", "purge channel for messages by bot");
        newCommand("purgeme", "purge channel for messages by yourself");
        newCommand("quickpurge", "purge channel for messages by everyone");
    }
    if (message.member.highestRole.comparePositionTo(plannerRole) >= 0) {
        newCommand("setup (tournament)", "!setup -commandName -title -url -description -responsable");
        newCommand("update (tournament)", "!update -commandName -title -url -description -responsable");
        newCommand("maketutor", "add tutor role to @mention1 @mention2...");

    }
    if (message.member.highestRole.comparePositionTo(ruslingRole) >= 0) {
        newCommand("tournamentName", "displays information about each tournament. ex: '!cs' or '!lol'");
    } else {
        newCommand("nickname", "!nickname YourNameHere");
    }

    message.member.createDM().then(channel => channel.send(helpEmbed));

    function newCommand(commandString, commandDescription) {
        helpEmbed.addField('!' + commandString, `*${commandDescription}*`, true);
    }
}
