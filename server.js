//======== DEPENDENCIES ========
const express = require('express')
const app = express();
const mongoose = require('mongoose');
//====== CONFIGURATION ======
const port = 3000;

//  ========== CONNECT TO MONGOOSE ========== //
mongoose.connect('mongodb://localhost:27017/traveltracker', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})

//======= ROUTES ===========
app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})


//======= LISTENER ===========
app.listen(port , (req, res) => {
  console.log('listening......');
})
