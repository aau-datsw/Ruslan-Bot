const Discord = require('discord.js');
const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    const mcEmbed = new Discord.MessageEmbed()
        .setColor("#5175BC")
        .setTitle('Minecraft')
        .addFields(
            { name: 'Minecraft 1.16.3 Vanilla/Minigames', value: 'v.mc.ruslan.dk'},
            { name: 'Minecraft 1.12 Enigmatica2 ModPack', value: 'e.mc.ruslan.dk'}
        )
    message.reply(mcEmbed)
}

module.exports.config = {
    name: 'minecraft',
    aliases: ['mc'],
    description: 'Provides information about Minecraft',
    permission: config.rusling_role_id
}