

module.exports.execute = async (client, message, args) => {
    const ruslingRole = message.member.guild.roles.find(r => r.name === "Rusling");
    const otherRole = message.member.guild.roles.find(r => r.name === "Other");
    const command = message.content.toLowerCase().slice(1).split(/ +/).shift();
    console.log(command);
    try {
        if (message.member.nickname) {
            if (command === 'rusling') {
                addRoleToMember(message, ruslingRole);
            } else if (command === 'other'){
                addRoleToMember(message, otherRole);
            }
        } else {
            console.log("'\t" + message.member.displayName + "' tried to join the server without a nickname");
        }
    } catch (error) {
        console.log(error);
    }
}

function addRoleToMember(message, role){
    message.member.addRole(role)
        .then(console.log(`${message.member.displayName}` + " is " + role.name))
        .catch(error => console.log(error));
}


module.exports.config = {
    name: 'rusling',
    aliases: [],
    description: 'Sets the rusling role for a user',
}