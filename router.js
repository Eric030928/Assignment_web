const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Welcome.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/About.html'));
});

router.get('/awards', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Awards.html'));
});

router.get('/hobbies', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Hobbies.html'));
});

router.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, './src/html/Project.html'));
});

module.exports = router;