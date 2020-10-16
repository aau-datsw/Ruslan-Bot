const config = require('../config.json');
const fs = require('fs');
let http = require('https');


function downloadAttachment(url, dest, cb){
    console.log('initiating download of '+ url +'...');
    let file = fs.createWriteStream(dest);
    let request = http.get(url, (res) => {
        res.pipe(file);
        file.on('finish', function() {
            file.close(cb);  // close() is async, call cb after close completes.
        });
    })
    .on('error', function(err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
    });

    
  
}

module.exports.execute = async (client, message, args) => {
    if (message.attachments.first()) {
        console.log(message.attachments.first().url)
        downloadAttachment(message.attachments.first().url, './usrs.tmp', () => {
            message.delete();
            let ppl = fs.readFileSync('./usrs.tmp').toString().toLowerCase().replace(/@student\.aau\.dk/g, '').replace(/\r/g,'').split(/\n/g);
            console.log(ppl)
            let signUps = {
                nosignin: ppl,
                signin: []
            }
            fs.writeFileSync('./signup.json', JSON.stringify(signUps, null, 4));
            fs.unlinkSync('/usrs.tmp')
        });
    }
}

module.exports.config = {
    name: 'attendants',
    aliases: [],
    description: 'Loads the attendant list',
    permission: config.admin_role_id
}