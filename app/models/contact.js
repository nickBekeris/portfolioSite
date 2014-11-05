// grab the mongoose module
var mongoose = require('mongoose');

// define nfl model
module.exports = mongoose.model('contact', {
  name: String,
  email: String,
  question: String
});
