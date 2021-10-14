const { SlashCommandBuilder } = require("@discordjs/builders");
const path = require('path');
const fs = require('fs');
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('enter')
        .setDescription('enters a giveaway')
        .addStringOption(option =>{
            return option
                .setName('giveaway')
                .setDescription('the giveaway you want to enter')
                .setRequired(true)
        }),
    async execute(interaction){
        const giveaway = interaction.options.getString('giveaway');
        let json;

        try{json = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../draws.json')));} 
        catch(e){console.log}

        if(interaction.member.roles.highest.comparePositionTo(config.rusling_role_id) > 0){
            await interaction.reply({content:'You need to be a rusling to join a giveaway!', ephemeral: true})
            return;
        }

        const draw = json.draws.find(draw => draw.name.toLowerCase() === giveaway.toLowerCase());

        if(!draw){
            await interaction.reply({content:'no giveaway with that name', ephemeral: true});
            return;
        }

        if(draw.winnerChosen) return;

        if(draw.participants.some(id => id === interaction.member.id)){
            await interaction.reply({content: "You're already in this giveaway!", ephemeral: true});
            return;
        }

        draw.participants.push(interaction.member.id);
        fs.writeFileSync(path.resolve(__dirname, '../draws.json'), JSON.stringify(json, null, 4));

        await interaction.reply({content:`You have now entered the ${draw.name} giveaway!`, ephemeral: true});
    }
}