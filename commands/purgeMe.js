module.exports = message => {
    try {
        message.channel.bulkDelete(message.channel.messages.cache.filter(msg => msg.author === message.author))
    } catch (error) {
        console.log(error);
    }
}


module.exports.config = {
    name: 'purgeme',
    aliases: [],
    description: 'Purges all messages from the sender',
}