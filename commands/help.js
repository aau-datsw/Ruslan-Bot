const Discord = require('discord.js');
//const { config } = require('dotenv');
const config = require('../config.json');

module.exports = message => {
    const adminRole = message.member.guild.roles.cache.find(r => r.id === config.admin_role_id);
    const plannerRole = message.member.guild.roles.cache.find(r => r.id === config.planner_role_id);
    const ruslingRole = message.member.guild.roles.cache.find(r => r.id === config.pleb_role_id);

    const helpEmbed = new Discord.MessageEmbed()
        .setColor('#ffc800')
        .setTitle("**Commands**")
        .setDescription(`These are the different commands to use for **${message.member.roles.highest.name}**:`);


        
    if (message.member.roles.highest.comparePositionTo(adminRole) >= 0) {
        newCommand("purgebot", "purge channel for messages by bot");
        newCommand("purgeme", "purge channel for messages by yourself");
        newCommand("quickpurge", "purge channel for messages by everyone");
    }
    if (message.member.roles.highest.comparePositionTo(plannerRole) >= 0) {
        newCommand("setup (tournament)", "!setup -commandName -title -url -description -responsable");
        newCommand("update (tournament)", "!update -commandName -title -url -description -responsable");
        newCommand("maketutor", "add tutor role to @mention1 @mention2...");

    }
    if (message.member.roles.highest.comparePositionTo(ruslingRole) >= 0) {
        newCommand("support", "if you need live support");
        newCommand("tournaments", "list all tournament commands");
    } else {
        newCommand("rusling", "to become a rusling");
        newCommand("other", "to get access");
        newCommand("nickname", "!nickname Your Name Here");
    }

    message.member.createDM().then(channel => channel.send(helpEmbed));

    function newCommand(commandString, commandDescription) {
        helpEmbed.addField('!' + commandString, `*${commandDescription}*`, true);
    }
}
