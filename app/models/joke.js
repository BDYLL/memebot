const mongoose = require('mongoose');

const jokeSchema = {
    gender: String,
    joke: String,
}

module.exports = mongoose.model("Joke", jokeSchema);