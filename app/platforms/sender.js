class Sender {
    constructor() {

    }

    async sendText(text) {
        throw new Error("sendText method not implemented.");
    }

    async sendImage(imageUrl) {
        throw new Error("sendImage method not implemented.");
    }
}

module.exports = Sender;