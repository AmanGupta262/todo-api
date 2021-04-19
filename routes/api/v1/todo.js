const express = require('express');
const router = express.Router();
const todoApi = require('../../../controllers/api/v1/todo_api');

router.get('/', todoApi.index);
router.post('/create', todoApi.create);

module.exports = router;