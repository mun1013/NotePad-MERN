const express = require('express');
const Note = require('../models/note');
const router = express.Router();

// @route GET /notes
// @desc GET all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find({});
    res.send(notes);
  } catch (error) {
    res.status(500).send();
  }
});

// @route POST /notes
// @desc Create a note
router.post('/notes', async (req, res) => {
  const note = new Note({
    ...req.body
  })
  try {
    await note.save()
    res.status(201).send(note);
  } catch (error) {
    res.status(500).send();
  }
});

// @route PATCH /notes/:id
// @desc Edit a note
router.patch('/notes/:id', async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const note = await Note.findOne({ _id: req.params.id });

    if (!note) {
      return res.status(404).send();
    }

    updates.forEach((update) => note[update] = req.body[update]);
    await note.save();
    res.send(note);
  } catch (error) {
    res.status(400).send(error)
  }
});

// @route DELETE /notes/:id
// @desc Delete a note
router.delete('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(400).send();
    }

    res.send(note);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;