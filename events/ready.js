const Discord = require('discord.js');
require('dotenv').config();

module.exports = (client) => {
    console.log('The RUSLAN bot is ready!');

    const channel = client.channels.find(ch => ch.name === 'bot-testing'); // change to env file id
    try {
        channel.fetchMessages()
            .then(messages => {
                const botMsg = messages.filter(fetchedMsg => fetchedMsg.author.id === process.env.BOT_ID);
                channel.bulkDelete(botMsg);
            })
            .catch(console.error);
    } catch (err) {
        console.error(err);
    }
    
    
    const exampleEmbed = new Discord.RichEmbed()
        .setColor('#ffc800')
        .setTitle('Velkommen til ruslan')
        .setURL('https://discord.js.org/') // Link til info om lan
        .setAuthor('Tutorene', 'https://i.imgur.com/PK1WFTJ.jpg', 'http://sw.rusling.dk')
        .setDescription('Der her er discorden til RUSlan 2019')
        .setThumbnail('https://i.imgur.com/rHhIWXe.jpg')
        .addBlankField()
        .addField('Rusling', 'skriv "!rusling" for at komme ind på serveren', true)
        .addField('Tutor', 'kig jeres facebook gruppe for at få adgang', true)
        .setImage('https://i.imgur.com/p5A0aWR.png')
        .setTimestamp()
        .setFooter('Ruslan-bot\'en', 'https://i.imgur.com/piKmQwn.jpg');
    channel.send(exampleEmbed);
}