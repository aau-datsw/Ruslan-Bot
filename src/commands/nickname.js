module.exports.execute = async (client, message, args) => {
    try {
        if (args) {
            message.member.setNickname(args.join(' '));
        } else {
            message.reply("Provide a name in the command");
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports.config = {
    name: 'nickname',
    aliases: ['nick'],
    description: 'Changes the nickname of the sender',
}