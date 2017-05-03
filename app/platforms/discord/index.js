const Sender = require('../sender');
const Discord = require('discord.js');
const token = process.env.DISCORD_BOT_TOKEN;

// Create a bot
const bot = new Discord.Client();
bot.login(token);

bot.on('ready', () => {
    // Once the bot is ready, let us know by logging this message into the console
    console.log('DiscordBot is connected!')
});

// Sends a message to user
function sendMessage(userId, messageToSend) {
    bot.users.get(userId).sendMessage(messageToSend);
}

bot.on('message', (message) => {
    // The bot should not answer itself
    if (message.author.id == "283107287730618369") {
        return
    }

    // we only care about user messages
    if (message.channel == '291618573296730113') {
      let sender = new DiscordSender(message.author.id, bot);
      MemetorBot.handleMessage(message.text, sender);
    }

});