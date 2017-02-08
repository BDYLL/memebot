const mongoose = require('mongoose');
const settings = require('./settings.js');

// Changes the default mongoose promises library for the native one.
mongoose.Promise = global.Promise;

const connectionUrl = `mongodb://${settings.host}:${settings.port}/${settings.db}`

const options = {
  user: settings.user,
  pass: settings.pass
}

module.exports = () => {
  mongoose.connect(connectionUrl, options)
  .then(result => console.log('Successfully connected to MongoDB:', connectionUrl))
  .catch(error => console.log(error));
}
