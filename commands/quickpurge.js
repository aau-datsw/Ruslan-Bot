module.exports = message => {
    try {
        message.channel.messages.bulkDelete(100);
    } catch (error) {
        console.log(error);
    }
}