const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));
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
  // 读取leaderboard.json文件的内容
  fs.readFile('./src/leaderboard.json', 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 如果文件不存在，初始化为空数组
        leaderboard = [];
      } else {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
    } else {
      // 尝试将读取到的数据解析为JSON，如果解析失败，默认为[]
      leaderboard = JSON.parse(data) || [];
    }

    // 创建一个新的得分记录对象
    const scoreRecord = {
      userName: req.body.userName,
      finalScore: req.body.finalScore,
      finalTime: req.body.finalTime
    };

    // 将得分记录添加到得分榜中
    leaderboard.push(scoreRecord);

    // 将更新后的得分榜写入leaderboard.json文件
    fs.writeFile('./src/leaderboard.json', JSON.stringify(leaderboard), 'utf8', err => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      // 返回成功的响应
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