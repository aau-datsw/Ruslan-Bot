const {client, RichEmbed} = require('discord.js');

module.exports = (client, richEmbed) => {
    console.log(client.user.tag + ' is ready!');
    const channel = client.channels.find(ch => ch.name === 'welcome');
    
    /* 
    var welcome = new RichEmbed()
     .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    channel.send(welcome);
    */
    
}