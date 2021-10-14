const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('plstutor')
        .setDescription('asks permission to get tutor role'),
    async execute(interaction){
        const tutorRole = await interaction.guild.roles.fetch(config.tutor_role_id);
        const tutorChat = interaction.guild.channels.cache.get(config.tutor_bump);
        const memberRole = interaction.member.roles.highest.position;


        if(memberRole < tutorRole.position){
            const message = await tutorChat.send(`${tutorRole} ${interaction.member} vil gerne have tutor rolle!`);

            message.react('👍').then(() => message.react('👎'));

            await interaction.reply({content: "Anmodning sendt!", ephemeral: true})
        } else await interaction.reply({content: "Anmodning afvist!", ephemeral: true})
    }
}
