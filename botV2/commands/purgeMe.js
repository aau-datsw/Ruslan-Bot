
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purgeme')
        .setDescription('Purges 100 messages from the sender'),
    async execute(interaction){
        try{
            const fetchedMessages = await interaction.channel.messages.fetch({limit: 100});
            fetchedMessages.filter(msg =>msg.author.id === interaction.member.id)
                .forEach(msg => msg.delete());    
            await interaction.reply("Deleted your messages!");    
        } catch(e){
            console.log(e);
        }
    }
}

/*module.exports.config = {
    name: 'purgeme',
    aliases: [],
    description: 'Purges all messages from the sender',
    permission: config.rusling_role_id
}*/