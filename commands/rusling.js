
module.exports = message => {
    const ruslingRole = message.member.guild.roles.find(r => r.name === "Rusling");
    if (message.member.highestRole.comparePositionTo(ruslingRole) < 0) {
        if (message.member.nickname){
            message.member.addRole(ruslingRole)
                .then(console.log(`${message.member.displayName}` + " is rusling"))
                .catch(error => console.log(error));
        } else{
            console.log("'\t" + message.member.displayName + "' tried to become " + ruslingRole.name + " without a nickname   ");
        }
        
    }
}