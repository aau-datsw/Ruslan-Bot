const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('code')
        .setDescription('Hvis du bare gerne vil kode'),
    async execute(interaction){
            await interaction.reply({content:`
Du vil bare gerne kode? Fedt!:
Du kan enten få hjælp til dine egne projekter af de andre tutorer. Bare ping "@Tutor Jeg har brug for hælp" og så kommer der nogle og hjælper :D

Ellers kan du prøve at sætte din første server op, ved at følge guiden på https://aau-datsw.github.io/How-to-deploy-your-first-software/
            `, ephemeral: true});
    }
}
