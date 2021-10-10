const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purgebot')
        .setDescription('Removes all messages from the bot'),
    async execute(interaction){
        try{
            const fetchedMessages = await interaction.channel.messages.fetch({limit: 100});
            fetchedMessages.filter(msg => msg.author.bot)
                .forEach(msg => msg.delete());
            await interaction.reply("Deleted bot messages!");
        }catch(e){
            console.log(e);
        }
    }
}

/*module.exports.config = {
    name: 'purgebot',
    aliases: ['pb'],
    description: 'Removes all messages from the bot',
    permission: config.admin_role_id
}*/