module.exports = message => {
    try {
        message.channel.messages.bulkDelete(100);
    } catch (error) {
        console.log(error);
    }
}


module.exports.config = {
    name: 'quickpurge',
    aliases: ['qp'],
    description: 'Purges 100 messages from a given channel',
}