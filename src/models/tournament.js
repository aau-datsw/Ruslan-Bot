module.exports = class Tournament {
    constructor(commandName, title, url, thumburl, description, responsable) {
        this.commandName = commandName;
        this.title = title;
        this.responsable = responsable;
        this.url = url;
        this.thumburl = thumburl;
        this.description = description;
        this.color = '#ffc800';
    }
}