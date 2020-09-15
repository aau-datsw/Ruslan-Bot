module.exports = message => {
    try {
        message.channel.bulkDelete(message.channel.messages.cache.filter(msg => msg.author === message.author))
    } catch (error) {
        console.log(error);
    }
}