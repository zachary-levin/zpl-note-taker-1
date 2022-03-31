const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(body);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string" || note.title === "") {
        return false;
    }
    if (!note.text || typeof note.text !== "string" || note.text === "") {
        return false;
    }
    return true;
}

module.exports = { createNewNote, validateNote };