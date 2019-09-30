module.exports = message => {
    const args = message.content.slice(1).split(/ +/);
    const tutorRole = message.member.guild.roles.find(r => r.name === "Tutor");

    args.forEach(member => {
        member.addRole(tutorRole)
                .then(console.log(`${message.member.displayName}` + " is tutor"))
                .catch(error => console.log(error));
        purgeChannelforAuthor(message);
            });



    function purgeChannelforAuthor(message) {
        try {
            const purgeChannel = message.channel;
            purgeChannel.fetchMessages({ limit: 100 }).then(allMsg => {
                const allMsgByAuthor = allMsg.filter(fetchedMsg => fetchedMsg.author === message.author);
                purgeChannel.bulkDelete(allMsgByAuthor, true);
            })
                .catch(error => console.log(error));
        } catch (err) {
            console.error(err);
        }
    }
}
