const config = require('../../config.json');
const fs = require('fs');

module.exports.execute = async (client, message, args) => {
    await message.delete();
    console.log(args)
    if (args.length != 1) {
        message.reply('Venligst brug kommandoen med din studie mail\nEksempel `!deltag dig@student.aau.dk`')
            .then(msg => msg.delete({timeout: 5000})).catch(console.log);
        return
    }
    let users = JSON.parse(fs.readFileSync('./signup.json').toString());
    if (users.nosignin.indexOf(args[0].replace(/@student\.aau\.dk/g, '').replace(/[<>]/g, '')) != -1) {
        users.nosignin = users.nosignin.filter(usr => usr != args[0]);
        users.signin.push(args[0]);
        fs.writeFileSync('./signup.json', JSON.stringify(users, null, 4))
        message.member.roles.add(config.rusling_role_id);
    } else {
        await message.reply('En anden person deltager allerede med denne mail. Hvis dette er en fejl kan du kontakte en tutor').then(msg => msg.delete({timeout:5000}));
        return;
    }
}

module.exports.config = {
    name: 'deltag',
    aliases: ['attend'],
    description: 'Marks you as a signed up attendant',
    permission: "723895561849143347"
}