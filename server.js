//======== DEPENDENCIES ========
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const moment = require('moment')
const morgan = require('morgan')
//====== CONFIGURATION ======
const port = 3000;
//=========== MIDDLEWARE ============
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use(express.static('public'))
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
