var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var spotModel = new Schema({
  name: { type: String },
  passwords_history: [{ password: String, time: String }],
  poll: { yes: Number, no: Number, totalVotes: Number },
  poweroutlets: { type: String },
  address: { street: String, number: Number, state: String, zip: Number }
});

module.exports = mongoose.model('Spot', spotModel);
