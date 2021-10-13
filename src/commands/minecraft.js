const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
//const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Minecraft information'),
    async execute (interaction) { 
        const mcEmbed = new MessageEmbed()
            .setColor("#5175BC")
            .setTitle('Minecraft')
            .addFields(
                { name: 'Minecraft 1.16.3 Vanilla/Minigames', value: 'v.mc.ruslan.dk'},
                { name: 'Minecraft 1.12 Enigmatica2 ModPack', value: 'e.mc.ruslan.dk'}
            )
        await interaction.reply({
            embeds: [mcEmbed],
            ephemeral: true
        });
    }
}

/*module.exports.config = {
    name: 'minecraft',
    aliases: ['mc'],
    description: 'Provides information about Minecraft',
    //permission: config.rusling_role_id
}*/