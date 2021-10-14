const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stream')
        .setDescription('Provides a link to the stream'),
    async execute(interaction){
        interaction.reply({content:"Linket til streamen er https://www.twitch.tv/swruslan1337", ephemeral: true})
    }
    
}
