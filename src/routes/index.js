const express = require('express');
const router = express.Router();

const Instagram = require('node-instagram');

router.get('/', (req, res) => {
    res.send('index page');
})

module.exports = router;