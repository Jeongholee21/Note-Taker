const express = require('express');

const get = require('./routes/get.js');
const save = require('./routes/save.js');
const deletedb = require('./routes/delete.js');

const app = express();

app.use('/notes', get);
app.use('/notes', save);
app.use('/notes', deletedb);

module.exports = app;