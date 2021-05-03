const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req, res) {
    const index = path.join(__dirname, '../index.html');
    res.sendFile(index);
});
router.use('/api', require('./api'));

module.exports = router;