
module.exports = message => {
    const ruslingRole = message.member.guild.roles.find(r => r.name === "Rusling");
    if (message.member.nickname) {
        if (message.member.highestRole.comparePositionTo(ruslingRole) < 0) {
            message.member.addRole(ruslingRole)
                .then(console.log(`${message.member.displayName}` + " is rusling"))
                .catch(error => console.log(error));
        }
    } else {
        console.log("'\t" + message.member.displayName + "' tried to join the server without a nickname");
    }
}