const config = require('../config.json');
const fs = require('fs');

function getUpdate() {
    require('child_process').execSync('git pull');
    process.exit();
}

module.exports.execute = async (client, message, args) => {
    await message.channel.send('🔁 Updating. Please wait...')
    getUpdate();
}

module.exports.config = {
    name: 'deltag',
    aliases: ['attend'],
    description: 'Marks you as a signed up attendant',
    permission: config.admin_role_id
}