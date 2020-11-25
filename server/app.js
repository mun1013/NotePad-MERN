const express = require('express');
const noteRouter = require('./routers/notes');
require('./db/mongoose');

const app = express();

//router
app.use(express.json());
app.use(noteRouter);

module.exports = app;