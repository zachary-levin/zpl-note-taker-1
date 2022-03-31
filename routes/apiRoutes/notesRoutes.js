const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const {
    createNewNote,
    validateNote,
} = require("../../lib/notes");

const notes = require('../../db/db.json');

// GET /api/notes should read the db.json file and return all saved notes as JSON

router.get('/notes', (req, res) => {
    res.json(notes)
});

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file,
// and then return the new note to the client.

router.post('/api/notes', (req, res) => {
    // NPM package to generate a unique id for each note
    req.body.id = uuidv4();
    
    if(!validateNote(req.body)) {
        res.status(400).send('This note is not formatted properly.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;