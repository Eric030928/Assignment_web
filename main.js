const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5500;
const opn = require('opn');

// 打开默认浏览器

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // 用于解析 application/json
app.use(express.static(path.join(__dirname, 'src')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/html'));

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

app.post('/submit', (req, res) => {
  leaderboard = [];
  // Read leaderboard.json
  fs.readFile('./src/leaderboard.json', 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // If null
        leaderboard = [];
      } else {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
    } else {
      leaderboard = JSON.parse(data) || [];
    }
    // Create a new object to take the values that passed
    const scoreRecord = {
      userName: req.body.userName,
      finalScore: req.body.finalScore,
      finalTime: req.body.finalTime
    };
    // Push it into the record
    leaderboard.push(scoreRecord);
    // Write it back
    fs.writeFile('./src/leaderboard.json', JSON.stringify(leaderboard), 'utf8', err => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      // Return the response of the success
      res.status(200).send('Score submitted successfully');
    });
  });
});


app.get('/leaderboard', (req, res) => {
  fs.readFile('./src/leaderboard.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    const leaderboard = JSON.parse(data) || [];
    res.json(leaderboard);
  });
});

opn(`http://localhost:${port}`);