const config = require('../../config.json');
const fs = require('fs');

module.exports.execute = async (client, message, args) => {
    // !draw new "navn" "beskrivelse"
    // !enter "navn" "information"
    
    let draws_json;
    switch (args[0].toLowerCase()) {
        case 'new':
        case 'n':
        case 'create':
        case 'c':
            if (args.length < 3) {
                message.reply('Du skal som minimum give lodtrækningen et navn og en beskrivelse');
                return;
            }
            let draws = '{"draws":[]}';
            try {
                draws = fs.readFileSync('./draws.json');
                draws_json = JSON.parse(draws);
            } catch {
                fs.writeFileSync('./draws.json',draws);
                draws = fs.readFileSync('./draws.json');
                draws_json = JSON.parse(draws);
            }
            if (draws_json.draws.map(dr => dr.name.toLowerCase()).includes(args[1].toLowerCase())) {
                message.reply('En lodtrækning med det navn eksisterer allerede...');
                return;
            }
            console.log(args)
            //  Set up draw
            let new_draw = {
                name: args[1],
                description: args.slice(2).join(' ').replace(/\\n/g,'\n'),
                participants: []
            }
            draws_json.draws.push(new_draw);
            fs.writeFileSync('./draws.json', JSON.stringify(draws_json, null, 4));
            message.reply(`Lodtrækning '${args[1]}' er nu oprettet.`);
            return;
        case 'remove':
        case 'r':
        case 'delete':
        case 'd':
            try {
                draws_json = JSON.parse(fs.readFileSync('./draws.json'));
            } catch {
                message.reply('Der er desværre ikke nogen aktive lodtrækninger lige nu...');
                return;
            }
            if (draws_json.draws.some(dr => dr.name.toLowerCase() == args[1].toLowerCase())) {
                draws_json.draws = draws_json.draws.filter(d => d.name.toLowerCase() != args[1].toLowerCase());
                fs.writeFileSync('./draws.json', JSON.stringify(draws_json, null, 4));
                message.reply(`Lodtrækningen '${args[1]}' blev slettet`);
            } else {
                message.reply('Denne lodtrækning findes ikke');
            }
            return;
        case 'get':
        case 'g':
        case 'deltagere':
        case 'gdpr_problems':
        case 'participants':
            try {
                draws_json = JSON.parse(fs.readFileSync('./draws.json'));
            } catch (e) {
                message.reply('Der er desværre ikke nogen aktive lodtrækninger lige nu...');
                console.log(e)
                return;
            }
            if (draws_json.draws.some(dr => dr.name.toLowerCase() == args[1].toLowerCase())) {
                let draw = draws_json.draws.find(dr => dr.name.toLowerCase() == args[1].toLowerCase());
                let parts = '"discName";"id";"info"\n';
                console.log(draw)
                draw.participants.forEach(part => {
                    console.log(part)
                    parts += `"${part.usr}";"${part.id}";"${part.info}"\n`
                });
                message.channel.send(`Deltagere i '${args[1]}' lodtrækningen:`)
                message.channel.send(parts, { code: 'csv'})
            } else {
                message.reply('Denne lodtrækning findes ikke');
            }

    }
}

module.exports.config = {
    name: 'lodtrækning',
    aliases: ['draw', 'd'],
    description: 'Removes all messages from the bot',
    permission: config.admin_role_id
}