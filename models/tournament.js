module.exports = class Tournament {
    constructor(commandName, title, url, description, responsable) {
        this.commandName = commandName;
        this.title = title;
        this.responsable = responsable;
        this.url = url;
        this.description = description;
        this.color = '#ffc800';
    }
}