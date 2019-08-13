const express = require('express');
const router = express.Router();
const Travels = require('../models/travel.js');

// ========== ROUTES ========== //
//========= INDEX GET ROUTE ============
router.get('/', (req, res) => {
  Travels.find({}, (err, foundTravels) => {
    res.json(foundTravels)
  })
})

//=========== DELETE ROUTE ==============
router.delete('/:id', (req, res) => {
  Travels.findByIdAndRemove(req.params.id, (err, deletedTravels) => {
    res.json(deletedTravels)
  })
})

//=========== EDIT ROUTE =================
router.put('/:id', (req, res) => {
  Travels.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTravels) => {
    res.json(updatedTravels)
  })
})
//============ CREATE POST ROUTE ==========
router.post('/', (req, res) => {
  Travels.create(req.body, (err, createdTravels) => {
    res.json(createdTravels);
  })
})

// ========== EXPORT ========== //
module.exports = router;
