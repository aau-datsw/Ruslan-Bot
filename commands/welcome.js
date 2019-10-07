
const Discord = require('discord.js');

module.exports = (client) => {
    const channel = client.channels.find(ch => ch.name === 'welcome'); // change to env file id
        try {
            channel.fetchMessages()
                .then(messages => {
                    const botMsg = messages.filter(fetchedMsg => fetchedMsg.author.bot); // boolean for bot
                    channel.bulkDelete(botMsg);
                })
                .catch(console.error);
        } catch (err) {
            console.error(err);
        }


    const exampleEmbed = new Discord.RichEmbed()
        .setColor('#ffc800')
        .setTitle('Welcome to RUSlan')
        .setURL('https://docs.google.com/document/d/1M-PhUkAVviJaL6sqBXgLqwL_9f8t5TKqk7buvLpsYMk/edit?usp=sharing') // Rules document
        .setAuthor('Tutorene', 'https://i.imgur.com/PK1WFTJ.jpg', 'http://sw.rusling.dk')
        .setDescription('Welcome to the discord server for RUSlan 2019')
        .setThumbnail('https://i.imgur.com/rHhIWXe.jpg')
        .addField('Rules', 'Pls follow the rules -> <#628251600078766111>')
        .addField('Rusling', '1. Change your nickname to your real name, before joining the server "!nickname YourName"' +
            '\n2. Check the ruleset, by clicking the blue link above' +
            '\n3. Type "!rusling" to accept the rules, and get acess to the server')
        .addField('Tutor', '\tCheck with your other tutors, to get information on how to join', true)
        .setTimestamp()
        .setFooter('Ruslan-bot\'en', 'https://i.imgur.com/piKmQwn.jpg');
    channel.send(exampleEmbed);
}