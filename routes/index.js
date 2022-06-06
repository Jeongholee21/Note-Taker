const express = require('express');

const get = require('./get.js');
const save = require('./save.js');
const deletedb = require('./delete.js');

const app = express();

app.use('/notes', get);
app.use('/notes', save);
app.use('/notes', deletedb);

module.exports = app;
