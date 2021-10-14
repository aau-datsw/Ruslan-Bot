const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

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
                if(!command.name === "pull")
                    helpEmbed.addField(`/${command.name}`, command.description, true)
            });

            await interaction.reply({
                embeds: [helpEmbed],
                ephemeral: true
            }).catch(console.log);
        }
}
