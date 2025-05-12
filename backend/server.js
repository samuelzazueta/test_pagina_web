require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const articleRoutes = require('./routes/articles'); 
const userRoutes = require('./routes/users');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {

}).then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

app.listen(5001, () => console.log("Servidor en http://localhost:5001"));




