const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('code')
        .setDescription('If you just want to code this lan'),
    async execute(interaction){
            await interaction.reply(`
Du vil bare gerne kode? Fedt!:
Du kan enten få hjælp til dine egne projekter af de andre tutorer. Bare ping "@Tutor Jeg har brug for hælp" og så kommer der nogle og hjælper :D

Ellers kan du prøve at sætte din første server op, ved at følge guiden på https://aau-datsw.github.io/How-to-deploy-your-first-software/
            `);
    }
}

/*module.exports.config = {
    name: 'code',
    aliases: ['kode'],
    description: 'If you just want to code this lan',
    permission: config.rusling_role_id
}*/