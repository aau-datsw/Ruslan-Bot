module.exports = (channel, message) => {
    channel.fetchMessages({ limit: 100 })
        .then(allMsg => {
            const allMsgByBot = allMsg.filter(fetchedMsg => fetchedMsg.author.bot);
            channel.bulkDelete(allMsgByBot, true);
        })
        .catch(error =>
            console.log("purge:\n    " + error)
        );
}


module.exports.config = {
    name: 'purgebot',
    aliases: ['pb'],
    description: 'Removes all messages from the bot',
}