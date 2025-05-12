const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  summary: String,
  description: String,
  author: String,
  imageUrl: String,
});

module.exports = mongoose.model('Article', ArticleSchema);
