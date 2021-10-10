const { SlashCommandBuilder } = require('@discordjs/builders');
//const config = require('../../config.json');

// Delete all messages?

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quickpurge')
        .setDescription('Purges 100 messages from a given channel')
        .addIntegerOption(option =>{
            return option
                .setName('messages')
                .setDescription('Amount of messages to delete')
                .setRequired(false)
                
        }),
        async execute(interaction){
            try{
            const amount = interaction.options.getInteger('messages') || 100;
            let fetchedMessages;
            fetchedMessages = await interaction.channel.messages.fetch({limit: amount});
            fetchedMessages.forEach(msg => msg.delete());
            await interaction.reply({content:`Deleted ${amount} messages!`, ephemeral: true})
            } catch(e){
                console.log(e)
            }
        }
}


/*module.exports.config = {
    name: 'quickpurge',
    aliases: ['qp'],
    description: 'Purges 100 messages from a given channel',
    permission: config.admin_role_id
}*/