
const Discord = require('discord.js');
const config = require('../config.json')

module.exports.execute = (client) => {
    const channel = client.channels.cache.find(ch => ch.name === 'welcome'); // change to env file id
        try {
            channel.bulkDelete(100);
        } catch (err) {
            console.log(err);
        }


    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffc800')
        .setTitle('Welcome to RUSlan')
        .setURL('https://docs.google.com/document/d/1M-PhUkAVviJaL6sqBXgLqwL_9f8t5TKqk7buvLpsYMk/edit?usp=sharing') // Rules document
        .setAuthor('Tutorene', 'https://i.imgur.com/PK1WFTJ.jpg', 'http://sw.rusling.dk')
        .setDescription('Welcome to the discord server for RUSlan 2019')
        .setThumbnail('https://i.imgur.com/rHhIWXe.jpg')
        .addField(`Rules', 'Pls follow the rules -> <#${config.rules_channel}>`)
        .addField('Rusling', '1. Change your nickname to your real name, before joining the server "!nickname Your Real Name Here"' +
            '\n2. Check the ruleset, by clicking the blue link above' +
            '\n3. Type "!rusling" to accept the rules, and get acess to the server' + 
            '\n   If your confused, type "!help" for a list of commands')
        .addField('Other type of studnet', '\tSame as rusling, just type "!other" instead', true)
        .addField('Tutor', '\tCheck with your other tutors, to get information on how to join', true)
        .setTimestamp()
        .setFooter('Ruslan-bot\'en', 'https://i.imgur.com/piKmQwn.jpg');
    channel.send(exampleEmbed);
}