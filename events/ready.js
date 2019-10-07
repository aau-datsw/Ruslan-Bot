require('dotenv').config();
const Tournament = require("../models/tournament");
const welcome = require("../commands/welcome.js");


const fs = require("fs");

module.exports = (client) => {
    console.log('The RUSLAN bot is ready!');
    let data = fs.readFileSync('./tournaments.json');
    let tournaments = JSON.parse(data);
    welcome(client);
    //console.log(JSON.stringify(tournaments));


    // fs.writeFile("./models/tournaments.json", save, (err) => {
    //     if (err) console.log(err);
    //     console.log("Successfully Written to File.");
    //   });

}