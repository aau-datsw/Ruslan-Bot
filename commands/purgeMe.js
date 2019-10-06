module.exports = message => {
    try {
        const purgeChannel = message.channel;
        purgeChannel.fetchMessages({ limit: 100 }).then(allMsg => {
            const allMsgByAuthor = allMsg.filter(fetchedMsg => fetchedMsg.author === message.author);
            purgeChannel.bulkDelete(allMsgByAuthor, true);
        })
            .catch(error => console.log(error));
    } catch (err) {
        console.error(err);
    }
}