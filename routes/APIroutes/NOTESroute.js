const router = require('express').Router();
const fs = require('fs'); //Reminder: fs helps store, access, and manage data
const { v4: uuidv4 } = require('uuid');
const path = require('path');
//const createNote = require('../../lib/notes'); //Do I need this?
const db = require('../../db/db.json');

// get route for notes
router.get('/notes', (req, res) => {
    res.json(db);
});

//Submit or 'post' notes
router.post('/notes', (req, res) => {
    let note = req.body;

    //note id better handling
    note.id = uuidv4();
    db.push(note);
    
    //
    fs.writeFile('./db/db.json', JSON.stringify(db), function(err){
            if (err) throw err
            res.json(note);
            console.log('Your note has been saved!');
    })
});    

//BONUS: Delete notes
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    let notesIndex = db.findIndex(note => note.id == id);

    db.splice(notesIndex, 1);

    // re-write db.json to reflect changes
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), function(err) {
        if (err) throw err;
        res.json(db);
        console.log('Note has been deleted!');
    })
});

module.exports = router; 