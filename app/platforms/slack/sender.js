class SlackSender {
    constructor(id, bot) {
      this.id = id; 
      this.bot = bot;

      this.params = {
          icon_url: 'http://files.gamebanana.com/img/ico/sprays/4e68599f1e1ec.png',
      };
    }

    async sendText(text) {
        await this.bot.postMessage(this.id, text, this.params)
    }

    async sendImage(imageUrl) {
        throw new Error('sendImage method not implemented.');
    }
}

module.exports = SlackSender;