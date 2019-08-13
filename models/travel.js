const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
  location: String,
  date: String,
  pros: String,
  cons: String
});

const Travels = mongoose.model('Travels', travelSchema);


module.exports = Travels;
