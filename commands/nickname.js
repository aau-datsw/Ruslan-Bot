module.exports = (message, args) => {
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
