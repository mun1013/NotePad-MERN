const mongoose = require('mongoose');
const Note = require('../../models/note');

const noteOne = {
  _id: new mongoose.Types.ObjectId,
  title: 'First title',
  content: 'First content'
};

const noteTwo = {
  _id: new mongoose.Types.ObjectId,
  title: 'Second title',
  content: 'Second content'
};

const setupDatabase = async () => {
  await Note.deleteMany();
  await new Note(noteOne).save();
  await new Note(noteTwo).save();
};

module.exports = { noteOne, noteTwo, setupDatabase };