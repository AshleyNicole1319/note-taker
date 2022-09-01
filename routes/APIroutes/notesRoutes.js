const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');


router.get('/notes', (req, res) => {
    res.json(db);
});


router.post('/notes', (req, res) => {
    let note = req.body;
    
    note.id = uuidv4();
    db.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), function(err) {
        if (err) throw err;
        res.json(note);
        console.log('Note has been saved!');
    })
});


router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    let notesIndex = db.findIndex(note => note.id == id);

    db.splice(notesIndex, 1);

    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), function(err) {
        if (err) throw err;
        res.json(db);
        console.log('Note has been deleted!');
    })
});


module.exports = router;