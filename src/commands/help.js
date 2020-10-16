const Discord = require('discord.js');
//const { config } = require('dotenv');
const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    const adminRole = message.member.guild.roles.cache.find(r => r.id === config.admin_role_id);
    const plannerRole = message.member.guild.roles.cache.find(r => r.id === config.planner_role_id);
    const ruslingRole = message.member.guild.roles.cache.find(r => r.id === config.rusling_role_id);

    const helpEmbed = new Discord.MessageEmbed()
        .setColor('#ffc800')
        .setTitle("**Commands**")
        .setDescription(`These are the different commands to use for **${message.member.roles.highest.name}**:`);


        
    client.commands.forEach(element => {
        let r = message.member.guild.roles.cache.find(r => r.id === element.config.permission)
        if (message.member.roles.highest.comparePositionTo(r) >= 0)
            helpEmbed.addField(`!${element.config.name}`, element.config.description, true)
    });

    message.member.send(helpEmbed).catch(console.log)
}

module.exports.config = {
    name: 'help',
    aliases: ['h'],
    description: 'Provides a list of commands for the user to run',
    permission: config.rusling_role_id
}