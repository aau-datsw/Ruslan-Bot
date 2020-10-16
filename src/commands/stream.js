const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    message.reply("Linket til streamen er https://www.twitch.tv/swruslan1337")
}

module.exports.config = {
    name: 'stream',
    aliases: ['twitch'],
    description: 'Provides a link to the stream',
    permission: config.rusling_role_id
}