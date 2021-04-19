const express = require('express');
const router = express.Router();

router.get('/todo', require('./todo') );

module.exports = router;