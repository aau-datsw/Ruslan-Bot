const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    message.reply('Wanna join out global zoom call?')
    message.channel.send(`
There breakout rooms for each cluster!
just join the one you like :)

Topic: ruslan 2020

Join Zoom Meeting
https://aaudk.zoom.us/j/61452499095

Meeting ID: 614 5249 9095
Passcode: 678906
`)
}

module.exports.config = {
    name: 'zoom',
    aliases: ['video'],
    description: 'A big zoom call for all participants',
    permission: config.rusling_role_id
}