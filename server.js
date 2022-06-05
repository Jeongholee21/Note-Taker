const { json } = require('express');
const express = require('express');
const path = require('path');
const api = require('./routes/index')

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for clog, parsing JSON, urlencoded form data and access to public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);