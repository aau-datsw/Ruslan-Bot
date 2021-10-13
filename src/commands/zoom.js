//const config = require('../config.json');

const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("zoom")
        .setDescription("A big zoom call for all participants"),
    async execute (interaction){
        await interaction.reply({content:`
        There breakout rooms for each cluster!
        just join the one you like :)
        
        Topic: ruslan 2020
        
        Join Zoom Meeting
        https://aaudk.zoom.us/j/63512282548
        Passcode: 678906
        `, ephemeral: true});
    }
}

/*module.exports.config = {
    name: 'zoom',
    aliases: ['video'],
    description: 'A big zoom call for all participants',
    permission: config.rusling_role_id
}*/
