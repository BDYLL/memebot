const Messenger = require('fb-messenger');
const messenger = new Messenger(process.env.FACEBOOK_PAGE_TOKEN, 'REGULAR');

// Sender interface implementation for Facebook.
class FacebookSender {
    constructor(user) {
        this.user = user;
    }

    async sendText(text) {
        await messenger.sendTextMessage(this.user.id, text)
    }

    async sendImage(imageUrl) {
        await messenger.sendImageMessage(this.user.id, imageUrl)
    }
}

module.exports = FacebookSender;
