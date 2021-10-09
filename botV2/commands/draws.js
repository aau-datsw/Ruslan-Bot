const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lodtrækninger')
        .setDescription('Gives a list of all available draws!'),
    async execute(interaction){
        let json;
        try {
            json = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../draws.json')));
        } catch (e) {
            await interaction.reply({content: 'Der er desværre ikke nogen aktive lodtrækninger lige nu...'});
            console.log(e)
            return;
        }
        const msgEmbed = new MessageEmbed();
        msgEmbed.setTitle('Lodtrækninger');
        json.draws.forEach(element => {
            msgEmbed.addField(element.name, `${element.description}\n\n${element.participants.length} personer deltager!`);
        });
        await interaction.reply({
            embeds: [msgEmbed]
        });
    }
}

/*module.exports.config = {
    name: 'lodtrækninger',
    aliases: ['draws', 'ds'],
    description: 'Gives a list of all available draws!',
    permission: config.rusling_role_id
}*/