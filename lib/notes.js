//Reminder: fs helps store, access, and manage data
const fs = require('fs');
const path = require('path');

//Create note function for obvious reasons
function createNote (body, notesArray) {
    const note = body;

    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )

    return note;
}

module.exports = { createNote }; 