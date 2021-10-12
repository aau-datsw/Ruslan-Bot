const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../../config.json');

/*module.exports.execute = async (client, message, args) => {
    const tutorRole = message.member.guild.roles.find(r => r.name === "Tutor");
    try {
        if (args.length > 0) {
            args.forEach(name => {
                member = message.guild.members.find(member => member.displayName === name);
                member.addRole(tutorRole)
                    .then(message.channel.send(`${member.displayName} has become tutor`))
                    .catch(error => console.log(error));
            });
        } else {
            message.channel.send('Provide mentions in arguments');
        }
    } catch (error) {
        console.log(error);
    }

}*/


module.exports = {
    data: new SlashCommandBuilder()
        .setName('plstutor')
        .setDescription('asks permission to get tutor role'),
    async execute(interaction){
        const tutorRole = await interaction.guild.roles.fetch(config.tutor_role_id);
        const tutorChat = interaction.guild.channels.cache.get(config.tutor_bump);
        const memberRole = interaction.member.roles.highest.position;


        if(memberRole < tutorRole.position){
            tutorChat.send(`${tutorRole} ${interaction.member} vil gerne have tutor rolle!`);
            await interaction.reply({content: "Anmodning sendt!", ephemeral: true})
        } else await interaction.reply({content: "Anmodning afvist!", ephemeral: true})
    }
}

/*module.exports.config = {
    name: 'makeTutor',
    aliases: ['tutor'],
    description: 'Makes a given user a tutor',
    permission: config.admin_role_id
}*/