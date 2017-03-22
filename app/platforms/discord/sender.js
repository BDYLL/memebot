const Sender = require('../sender');

const Messenger = require('fb-messenger');

// Sender interface implementation for Facebook.
class DiscordSender extends Sender {
    constructor(client) {
        this.client = client;
    }

    async sendText(text) {
        this.client.users.get(userId).sendMessage(messageToSend);
    }

    async sendImage(imageUrl) {
        await messenger.sendImageMessage(this.user.id, imageUrl)
    }
}

module.exports = FacebookSender;