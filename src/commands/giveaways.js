const { SlashCommandBuilder } = require("@discordjs/builders");
const {MessageEmbed} = require('discord.js');
const path = require('path');
const fs = require('fs');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('giveaways')
    .setDescription('lists all giveaways'),
    async execute(interaction){
        let json;
        try {
            json = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../draws.json')));
        } catch (e) {
            interaction.reply({content: 'Der er desværre ikke nogen aktive lodtrækninger lige nu...', ephemeral: true});
            console.log(e)
            return;
        }
        const msgEmbed = new MessageEmbed();
        msgEmbed.setTitle('Lodtrækninger');
        json.draws.forEach(element => {
            msgEmbed.addField(element.name, `${element.description}\n\n${element.participants.length} personer deltager!`);
        });
        await interaction.reply({embeds:[msgEmbed], ephemeral: true})
    }
}