require('dotenv').config();
const Tournament = require("../models/tournament");
const welcome = require("../actions/welcome.js");


const fs = require("fs");

module.exports = (client) => {
    console.log('The RUSLAN bot is ready!');
    welcome.execute(client);
}
