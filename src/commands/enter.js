const config = require('../config.json');
const fs = require('fs')

module.exports.execute = async (client, message, args) => {
    // !draw new "navn" "beskrivelse"
    // !enter "navn" "information"
    let json;
    if (args.length < 2) {
        message.reply('Du skal som minimum vælge en lodtrækning og give et svar.\nSe `!lodtrækninger`')
    }
    try {
        json = JSON.parse(fs.readFileSync('./draws.json'));
    } catch {
        message.reply('Der er desværre ikke nogen aktive lodtrækninger lige nu...');
        return;
    }
    if (json.draws.some(dr => dr.name.toLowerCase() === args[0].toLowerCase())) {
        // En lodtrækning eksisterer
        let draw = json.draws.find(dr => dr.name.toLowerCase() === args[0].toLowerCase())

        if (draw.participants.some(part => part.id == message.member.id)) {
            message.reply('\*Tsk tsk\* Ikke snyde med turneringerne :eyes:')
            return;
        }

        draw.participants.push({
            id: message.member.id,
            usr: message.member.displayName,
            info: args.splice(1).join(' ')
        })

        fs.writeFileSync('./draws.json', JSON.stringify(json, null, 4));
        message.reply(`:tada: Du er nu med i lodtrækningen '${args[0]}'! :tada:`)
    }
}

module.exports.config = {
    name: 'enter',
    aliases: ['vind', 'træk'],
    description: 'Enters you into a draw',
    permission: config.rusling_role_id
}