const Tournament = require("../models/tournament");
const fs = require("fs");
const config = require('../../config.json');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Creates the necessary files for the bot')
        .addStringOption(option => {
            return option.setName('commandname').setDescription('Dunno?').setRequired(true)
        })
        .addStringOption(option =>{
            return option.setName('title').setDescription('Title of tournament').setRequired(true)
        })
        .addStringOption(option =>{
            return option.setName('url').setDescription('Dunno?').setRequired(true)
        })
        .addStringOption(option =>{
            return option.setName('thumburl').setDescription('Thumbnail url').setRequired(true)
        })
        .addStringOption(option =>{
            return option.setName('description').setDescription('description').setRequired(true)
        })
        .addUserOption(option =>{
            return option.setName('responsible').setDescription('Responsible').setRequired(true)
        }),
    async execute(interaction){
        const cmd = interaction.options.getString('commandname');
        const title = interaction.options.getString('title');
        const url = interaction.options.getString('url');
        const thumbUrl = interaction.options.getString('thumburl');
        const desc = interaction.options.getString('description');
        const res = interaction.options.getUser('responsible');
        const tutorRole = interaction.guild.roles.cache.get(config.planner_role_id);

        if (interaction.member.roles.highest.comparePositionTo(tutorRole) >= 0) { 
            const t = new Tournament(cmd, title, url, thumbUrl, desc, res.id);
    
            addTournamentCommand(t, interaction);
        } else {
            await interaction.reply("You do not have access to this command")
        }
    }
}

async function addTournamentCommand(tournament, interaction) {
    let data = fs.readFileSync('./tournaments.json');
    let tournaments = [];

    if (data === "") return;
    tournaments = JSON.parse(data);

    if (!tournaments.some(t => t.commandName == tournament.commandName)) {
        tournaments.push(JSON.parse(JSON.stringify(tournament)));

        fs.writeFile('./tournaments.json', JSON.stringify(tournaments), 'utf8', err => {
            if (err) {
                console.log(err);
            }
            console.log("Tournament has been saved.");
            interaction.reply("yes")
        });
    } else {
        await interaction.reply("This command already exists!")
        return;
    }
}

/*module.exports.config = {
    name: 'setup',
    aliases: [],
    description: 'Creates the necessary files for the bot',
    permission: config.admin_role_id
}*/