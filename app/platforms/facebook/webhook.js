const MessengerListener = require('facebook-messenger-bot').Bot;
const FacebookSender = require('./sender');
const MemetorBot = require('../../bot');

const messengerListener = new MessengerListener(
    process.env.FACEBOOK_PAGE_TOKEN,
    process.env.FACEBOOK_VERIFICATION_TOKEN);

messengerListener.on('message', async message => {
    sender = new FacebookSender(message.sender);
    MemetorBot.handleMessage(message.text, sender);
});

module.exports = messengerListener.router();