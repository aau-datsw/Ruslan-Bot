const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
//const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides a list of commands for the user to run'),
        async execute (interaction){
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#ffc800')
                .setTitle("**Commands**")
                .setDescription(`These are the different commands to use for **${interaction.member.roles.highest.name}**:`);

            let commands = await interaction.guild.commands.fetch();
            commands.forEach(command => {
                /*let role = interaction.member.guild.roles.cache.find(r => r.id === command.permission)
                if (interaction.member.roles.highest.comparePositionTo(role) >= 0)*/
                    helpEmbed.addField(`/${command.name}`, command.description, true)
            });

            await interaction.reply({
                embeds: [helpEmbed]
            }).catch(console.log);
        }
}

/*module.exports.config = {
    name: 'help',
    aliases: ['h'],
    description: 'Provides a list of commands for the user to run',
    permission: config.rusling_role_id
}*/