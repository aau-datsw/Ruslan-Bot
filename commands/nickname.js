module.exports = (message, args) => {
    if(args[0]){
        message.member.setNickname(args[0]);
    } else {
        message.reply("Provide a name in the command");
    }
}