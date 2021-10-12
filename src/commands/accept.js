const config = require('../../config.json');
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('accept')
        .setDescription('accepts the rules and joins the server')
        /*.addStringOption(option => {
            return option
                .setName('aau-mail')
                .setDescription('Your AAU mail')
                .setRequired(true)
        })*/,
    async execute(interaction){
        const rusling = await interaction.guild.roles.fetch(config.rusling_role_id);
        // const mail = interaction.options.getString('aau-mail'); 
        // const users = JSON.parse(fs.readFileSync('./signup.json'));
        
        interaction.member.roles.add(rusling);

        await interaction.reply({content: 'Du har nu adgang!', ephemeral:true})

        /*if(!mail.includes('@student.aau.dk'))
            await interaction.reply({content: 'Du kan kun bruge din AAU mail', ephemeral:true});
        else{
            if(users.notaccepted.includes(mail) && !users.accepted.includes(mail)){
                removeUser(users.notaccepted, mail)
                users.accepted.push(mail);

                fs.writeFileSync('./signup.json', JSON.stringify(users, null, 4));
                interaction.member.roles.add(rusling);
                await interaction.reply({content: 'Du har nu adgang!', ephemeral:true});
                return;
            }
        }
        await interaction.reply({content: 'Denne mail er ikke på listen eller er allerede registered!', ephemeral:true});*/
    }
}

/*function removeUser(array, mail){
    const index = array.indexOf(mail);
    if (index > -1) array.splice(index, 1);
}*/