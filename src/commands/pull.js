const { SlashCommandBuilder } = require("@discordjs/builders");
const path = require('path');
const fs = require('fs');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pull')
        .setDescription('pulls a winner for a giveaway')
        .addStringOption(option=>{
            return option
                .setName('giveaway')
                .setDescription('the giveaway to pull')
                .setRequired(true)
        }),
    async execute(interaction){
        const giveaway = interaction.options.getString('giveaway');
        let winner;
        let json;

        try{json = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../draws.json')));} 
        catch(e){console.log}

        if(interaction.member.roles.highest.comparePositionTo(config.giveaway_role_id) < 0){
            await interaction.reply({content:'Du har ikke adgang til denne kommando', ephemeral: true})
            return;
        }

        const draw = json.draws.find(draw => draw.name.toLowerCase() === giveaway.toLowerCase());

        if(!draw){
            await interaction.reply({content:'no giveaway with that name', ephemeral: true});
            return;
        }

        const winnerIndex = Math.floor(Math.random() * draw.participants.length);
        winner = draw.participants[winnerIndex];

        const member = await interaction.guild.members.fetch(winner).catch(console.error);

        draw.winnerChosen = true;
        fs.writeFileSync(path.resolve(__dirname, '../draws.json'), JSON.stringify(json, null, 4));

        await interaction.reply({content: `${member} har vundet ${draw.name} giveaway!`})
    }
}
