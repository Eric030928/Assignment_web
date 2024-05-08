const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router');
const path = require('path'); 
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src')));

app.use('/', routes);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './src/html/Welcome.html'));
});

app.listen(port, () => {
  console.log(`Website is running on port ${port}`);
});

