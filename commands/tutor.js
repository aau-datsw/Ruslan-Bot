module.exports = message => {
    const bumbChannel = message.client.channels.find(ch => ch.name === 'tutor-bump');
    bumbChannel.send(message.author + " wants to be tutor!");
}