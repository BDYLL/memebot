const SlackBot = require('slackbots');
const SlackSender = require('./sender');
const MemetorBot = require('../../bot');

// create a bot 
const bot = new SlackBot({
    token: process.env.SLACK_BOT_TOKEN,
    name: process.env.SLACK_BOT_NAME,
});

 bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    console.log('Started slack bot: ' + process.env.SLACK_BOT_NAME);
});

bot.on('message', function(message) {
    // all ingoing events https://api.slack.com/rtm 
    // we only care about user messages
    if (message.type === 'message' && message.subtype !== 'bot_message') {
      let sender = new SlackSender(message.channel, bot);
      MemetorBot.handleMessage(message.text, sender);
    }
});