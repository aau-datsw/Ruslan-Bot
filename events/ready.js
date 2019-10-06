const Discord = require('discord.js');
require('dotenv').config();
const Tournament = require("../models/tournament");

const fs = require("fs");

module.exports = (client) => {
    console.log('The RUSLAN bot is ready!');

    let data = fs.readFileSync('./tournaments.json');
    let tournaments = JSON.parse(data);
    //console.log(JSON.stringify(tournaments));


    // fs.writeFile("./models/tournaments.json", save, (err) => {
    //     if (err) console.log(err);
    //     console.log("Successfully Written to File.");
    //   });

    /*const channel = client.channels.find(ch => ch.name === 'welcome'); // change to env file id
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
        .addField('Rules', '')
        .addBlankFiels()
        .addField('Rusling', '1. Change your nickname, before joining the server' +
            '\n2. Check the ruleset, by clicking the blue link above' +
            '\n3. Type "!rusling" to accept the rules, and get acess to the server')
        .addField('Tutor', '\tCheck with your other tutors, to get information on how to join', true)
        .setTimestamp()
        .setFooter('Ruslan-bot\'en', 'https://i.imgur.com/piKmQwn.jpg');
    channel.send(exampleEmbed);*/
}