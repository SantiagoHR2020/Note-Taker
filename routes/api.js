// load Data
const notes = require("../db/notes");
const router = require("express").Router()

router.get("/notes", function(req, res) {
  notes
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});

router.post("/notes", (req, res) => {
  notes
    .writeNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err))
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", function(req, res) {
  notes
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
});

module.exports = router;