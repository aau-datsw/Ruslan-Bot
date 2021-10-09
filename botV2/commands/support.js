const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../../config.json');

module.exports =  {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Gives instructions on what to do if you need help'),
        async execute(interaction){
            const member = interaction.member;

            if(member.voice.channel){
                member.voice.setChannel(config.support_channel_vc);
                await interaction.reply({content:"You have been moved to support channel", ephemeral: true});
            } 
            else await interaction.reply({content: `Go to the voice channel <#${config.support_channel_vc}> to get live support`, ephemeral: true}); 
        }
}



/*module.exports.config = {
    name: 'support',
    aliases: [],
    description: 'Gives instructions on what to do if you need help',
    permission: config.rusling_role_id
}*/
