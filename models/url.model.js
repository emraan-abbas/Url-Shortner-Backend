const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  longUrl: String,
  shortUrl: String,
  urlCode: String
});

module.exports = mongoose.model('UrlSchema', urlSchema);