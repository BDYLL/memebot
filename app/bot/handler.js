// Bot logic goes here.

const wit = require('./wit');

module.exports = async (message, sender) => {
    // TODO(dtoledo23): Make Mongo search for jokes.
    let category = await wit.getCategory(message);
    sender.sendText(category);
}