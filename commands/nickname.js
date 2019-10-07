module.exports = (message, args) => {
    try {
        if (args) {
            name = '';
            args.forEach(element => {
                name += element
                
            });
            message.member.setNickname(name);
        } else {
            message.reply("Provide a name in the command");
        }
        
    } catch (error) {
        console.log(error);
    }
    
}