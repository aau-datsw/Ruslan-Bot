module.exports = {
    updatePermissions: async (client) => {
        let commands = await client.guild.commands.fetch;
        commands.forEach(element => {
            console.log(element)
        });
    }
}