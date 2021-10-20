const { SlashCommandBuilder } = require("@discordjs/builders");
const path = require('path');
const fs = require('fs');
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('enter')
        .setDescription('deltag i giveaway')
        .addStringOption(option =>{
            return option
                .setName('giveaway')
                .setDescription('den giveaway du vil deltage i')
                .setRequired(true)
        }),
    async execute(interaction){
        try{
            const giveawayChannel = interaction.client.channels.cache.get(config.giveawayChannel);
            const giveaway = interaction.options.getString('giveaway');
            let json;

            json = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../draws.json')));

            if(interaction.member.roles.highest.comparePositionTo(config.rusling_role_id) > 0){
                await interaction.reply({content:'Du skal være rusling for at kunne deltage!', ephemeral: true});
                return;
            }

            const draw = json.draws.find(draw => draw.name.toLowerCase() === giveaway.toLowerCase());

            if(!draw){
                await interaction.reply({content:'Ingen giveaway med dette navn, prøv tjek /giveaways', ephemeral: true});
                return;
            }

            if(draw.winnerChosen){
                await interaction.reply({content:`Vinderen er fundet, tjek ${giveawayChannel} for at se om det var dig!`, ephemeral: true});
                return;
            }

            if(draw.participants.some(id => id === interaction.member.id)){
                await interaction.reply({content: "Du er allerede tilmeldt denne giveaway", ephemeral: true});
                return;
            }

            draw.participants.push(interaction.member.id);
            fs.writeFileSync(path.resolve(__dirname, '../draws.json'), JSON.stringify(json, null, 4));

            await interaction.reply({content:`du deltager nu i ${draw.name} giveaway!\n Vinderen vil blive annonceret i ${giveawayChannel}`, ephemeral: true});
        } catch(e){console.error}
    }
}
