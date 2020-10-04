require('dotenv').config();
const fs = require('fs');
const config = require('../config.json')
const Discord = require('discord.js');
const ToornamentWrapper = require('../../../ToonamentWrapper/app.js'); // TODO Create actual wrapper in project
// This is for testing only

module.exports.execute = async (client, message, args) => {
    let auth_key = await ToornamentWrapper.Authenticate(process.env.TOORNAMENT_KEY.toString(), process.env.TOORNAMENT_SECRET.toString());
    let teamname = '';
    let tournament_id;

    for (let i = 2; i < args.length; i++) {
        if (i != args.length - 1){
            teamname += args[i] + ' ';
        }
        else {
            teamname += args[i];
        }
    }
    if (args.length == 2) 
    {
        message.channel.send('test');
    }
    else if (args.length >= 3)
    {
        try {
            switch (args[0].toLowerCase()) {
                case 'lol':
                    message.channel.send('Leauge of Legends is not implemented yet');
                    break;
            
                case 'rl':
                    message.channel.send('Rocket Leauge is not implemented yet');
                    break;

                case 'csgo':
                    tournament_id = config.tournaments.csgo.id;
                    break;

                default:
                    message.channel.send('Leauge of Legends = lol, Counter-Strike Global Offensive = csgo, Rocket Leauge = rl');
                    return;
                    break;
            }

            let resarr = await ToornamentWrapper.getParticpiantsNextMatch(tournament_id, auth_key, teamname, process.env.API_KEY.toString());
            let toornamentEmbed = new Discord.MessageEmbed()
            .setColor("#34aeeb")
            .setTitle("Tournament Info")
            .setDescription(config.tournaments[args[0]].description)
            .attachFiles(["./assets/PoweredbyToor_White.png"])
            .setThumbnail('attachment://PoweredbyToor_White.png')
            .addFields(
                {name: 'Next match', value : resarr[1]},
                {name: 'Additional Notes', value : resarr[0].public_note == null ? 'No notes' : resarr[0].public_note},
                {name: 'Participants', value : 
                `${resarr[0].opponents[0].participant == null ? 'TBD' : resarr[0].opponents[0].participant.name}\
                vs ${resarr[0].opponents[1].participant == null ? 'TBD' : resarr[0].opponents[1].participant.name}`}
            )
            
            console.log(resarr[0]);
            message.channel.send(toornamentEmbed);   
        } catch(error) {
            console.log(error);
            message.channel.send(`No match found for ${teamname}`);
        }
    }
}



module.exports.config = {
    name: 'atournament',
    aliases: [],
    description: 'Gets information about a tournament',
    permission: config.rusling_role_id
}