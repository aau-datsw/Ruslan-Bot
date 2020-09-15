module.exports = message => {
    const bumbChannel = message.client.channels.cache.find(ch => ch.name === 'tutor-bump');
    bumbChannel.send(message.author + " wants to be tutor!");
}