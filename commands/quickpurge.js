module.exports = message => {
    try {
        const purgeChannel = message.channel;
        purgeChannel.fetchMessages({ limit: 100 }).then(allMsg => {
            const deleteMsg = allMsg;
            purgeChannel.bulkDelete(deleteMsg, true);
        })
            .catch(error => console.log(error));
    } catch (err) {
        console.error(err);
    }
}