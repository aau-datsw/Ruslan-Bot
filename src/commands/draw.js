const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    
}

module.exports.config = {
    name: 'lodtrækning',
    aliases: ['draw'],
    description: 'Removes all messages from the bot',
    permission: config.admin_role_id
}