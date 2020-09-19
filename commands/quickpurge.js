const config = require('../config.json')

module.exports.execute = async (client, message, args) => {
    try {
        await message.delete();
        let fetchedMessages = [];
        if (args.length == 0) {
            fetchedMessages = await message.channel.messages.fetch(100);
        } else if (args[0] == 'all') {
            fetchedMessages = await message.channel.messages.fetch();
        } else if (Number(args[0])) {
            fetchedMessages = await message.channel.messages.fetch(Number(args[0]));
        }
        await message.channel.bulkDelete(message.channel.messages.cache, false).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(() => fetchedMessages.forEach(message => message.delete()))
    } catch (error) {
        console.log(error);
    }
}


module.exports.config = {
    name: 'quickpurge',
    aliases: ['qp'],
    description: 'Purges 100 messages from a given channel',
    permission: config.rusling_role_id
}