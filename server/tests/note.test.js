const request = require('supertest');
const app = require('../app');
const Note = require('../models/note');
const { noteOne, noteTwo, setupDatabase } = require('./fixtures/db');

beforeEach(() => {
  return setupDatabase();
});

test('Create a note', async () => {
  const response = await request(app)
    .post('/notes')
    .send({
      title: 'Having a vacation',
      content: 'Visit a beach'
    })
    .expect(201)

  const note = await Note.findById(response.body._id)
  expect(note).not.toBeNull()
});

test('Fetch all notes', async () => {
  const response = await request(app)
    .get('/notes')
    .send()
    .expect(200)

    expect(response.body.length).toEqual(2)
});

test('Edit a note', async () => {
  const response = await request(app)
    .patch(`/notes/${noteTwo._id}`)
    .send({
      title: 'Grocerries',
      content: 'vegetables'
    })
    .expect(200)
  
  const note = await Note.findById(noteTwo._id)
  expect(note.title).toEqual('Grocerries')
  expect(note.content).toEqual('vegetables')
})

test('Delete a note', async () => {
  await request(app)
    .delete(`/notes/${noteOne._id}`)
    .send()
    .expect(200)
  
  const note = await Note.findById(noteOne._id)
  expect(note).toBeNull()
});