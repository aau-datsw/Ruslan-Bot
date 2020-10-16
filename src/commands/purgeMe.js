const config = require('../config.json');


module.exports.execute = async (client, message, args) => {
    try {
        let fetchedMessages = await message.channel.messages.fetch(100, false).filter()
        message.channel.bulkDelete(message.channel.messages.cache.filter(msg => msg.author === message.author))
    } catch (error) {
        console.log(error);
    }
}


module.exports.config = {
    name: 'purgeme',
    aliases: [],
    description: 'Purges all messages from the sender',
    permission: config.rusling_role_id
}