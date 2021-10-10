const config = require('../../config.json')

module.exports.execute = async (client, newState) => {
        
        let channelName = `${newState.member.displayName}´s chat`;
        
        newState.guild.channels.create(channelName, {type: "GUILD_VOICE", parent: config.GameroomCategory, userLimit: 10,}).then(result => {
        newState.member.voice.setChannel(result.id)
        console.log("A new channel was created!");
        })
    
}


