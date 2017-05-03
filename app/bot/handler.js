const Joke = require('../models/joke');
const wit = require('./wit');

module.exports = async (message, sender) => {
    // TODO(dtoledo23): Make Mongo search for jokes.
    let category = await wit.getCategory(message);
    category = category.toLowerCase();
    let jokes = await Joke.find({category});

    if (jokes.length === 0) {
        sender.sendText("Sorry! I could not understand.");
        return;
    }

    const i = Math.floor( Math.random() * jokes.length );
    sender.sendText(jokes[i].joke);
}