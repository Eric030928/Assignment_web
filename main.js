const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'src')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/html'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './src/html/Welcome.html'));
});

app.listen(port, () => {
  console.log(`Website is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Welcome.html'));
});

app.get('/About', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/About.html'));
});

app.get('/Awards', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Awards.html'));
});

app.get('/Hobbies', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Hobbies.html'));
});

app.get('/Project', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Project.html'));
});

app.get('/Quiz', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Quiz.html'));
});
