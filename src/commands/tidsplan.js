const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tidsplan')
        .setDescription('Gets information about the schedule'),
    async execute(interaction){

        await interaction.reply({content: '__**Tidsplan til RusLan 2020**__\n\n**Fredag d. 16/10**\n\n18:00 - Introduktion til RusLAN \
        \n18:30 - Sponsor-talks\n19:00 - League of Legends 5v5\n22:00 - Scribbl.io\n\n**Lørdag d. 17/10** \
        \n\n12:00 - Rocket League\n14:00 - League of Legends 1v1\n16:00 - CS:GO\
        \n\n**Søndag d. 18/10**\n\n12:00 - Golf With Friends', ephemeral: true})
    }
}
