var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// shortcut to mongoose.connection object
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
  });

module.exports = mongoose;