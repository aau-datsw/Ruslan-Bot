require('dotenv').config();
const fs = require('fs');
const config = require('../config.json')
const Discord = require('discord.js');
const ToornamentWrapper = require('../../ToonamentWrapper/app.js'); // TODO Create actual wrapper in project
// This is for testing only

module.exports.execute = async (client, message, args) => {
    let auth_key = await ToornamentWrapper.Authenticate(process.env.TOORNAMENT_KEY.toString(), process.env.TOORNAMENT_SECRET.toString());
    if (args.length == 2) 
    {
        message.channel.send('test');
    }
    else if (args.length == 3)
    {
        let res = await ToornamentWrapper.getParticpiantsNextMatch('3927794528483983360', auth_key, args[2], process.env.API_KEY.toString());
        console.log(res);
        message.channel.send(`${args[2]}'s next match is at ${res}`);   
    }
}



module.exports.config = {
    name: 'atournament',
    aliases: [],
    description: 'Gets information about a tournament',
    permission: config.rusling_role_id
}