require('dotenv').config(); 
const mongoose = require('mongoose');
const Article = require('./models/articulo');
const data = require('./data/articulos.json');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Article.deleteMany({});
  await Article.insertMany(data);
  console.log('Datos importados correctamente');
  process.exit();
});
