const router = require('express').Router();

const {createNote} = require('../lib/notes');
const {db} = require('../db/db.json');

// Add route for notes
router.get('/notes', (req, res) => {
    let results = notesArray;

    res.json(results);
})


module.exports = router; 