//======== DEPENDENCIES ========
const express = require('express')
const app = express();
//====== CONFIGURATION ======
const port = 3000;

//======= ROUTES ===========
app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})


//======= LISTENER ===========
app.listen(port , (req, res) => {
  console.log('listening......');
})
