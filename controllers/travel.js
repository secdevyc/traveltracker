const express = require('express');
const router = express.Router();
const Travels = require('../models/travel.js');

// ========== ROUTES ========== //
//========= INDEX GET ROUTE ============
router.get('/', (req, res) => {
  Travels.find({}, (err, foundEntries) => {
    res.json(foundEntries)
  })
})

//=========== DELETE ROUTE ==============
router.delete('/:id', (req, res) => {
  Travels.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
    res.json(deletedEntry)
  })
})

//=========== EDIT ROUTE =================
router.put('/:id', (req, res) => {
  Travels.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEntry) => {
    res.json(updatedTodo)
  })
})
//============ CREATE POST ROUTE ==========
router.post('/', (req, res) => {
  Travels.create(req.body, (err, createdEntry) => {
    res.json(createdEntry);
  })
})

// ========== EXPORT ========== //
module.exports = router;
