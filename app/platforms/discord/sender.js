// Sender interface implementation for Discord.
class DiscordSender{
    constructor(id, bot) {
        super();
        this.id = id;
        this.bot = bot;
    }

    async sendText(text) {
        this.bot.users.get(this.id).sendMessage(text);
    }

    async sendImage(message,imageUrl) {
        throw new Error('sendImage method not implemented.');
    }
}

module.exports = DiscordSender;