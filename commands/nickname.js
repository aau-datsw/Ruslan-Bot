module.exports = (message, args) => {
    try {
        if (args[0]) {
            message.member.setNickname(args[0]);
        } else {
            message.reply("Provide a name in the command");
        }
        
    } catch (error) {
        console.log(error);
    }
    
}