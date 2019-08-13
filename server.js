//======== DEPENDENCIES ========
const express = require('express')
const app = express();
const mongoose = require('mongoose');
//====== CONFIGURATION ======
const port = 3000;

app.use(express.json());

//========== CONTROLLERS ==========//
const travelsController = require('./controllers/travel.js');
app.use('/traveltracker', travelsController);

//========== CONNECT TO MONGOOSE ==========//
mongoose.connect('mongodb://localhost:27017/traveltracker', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})

//======= LISTENER ===========
app.listen(port , (req, res) => {
  console.log('listening......');
})
