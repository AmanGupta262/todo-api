const express = require('express');
const router = express.Router();
const todoApi = require('../../../controllers/api/v1/todo_api');

router.get('/', todoApi.index);
router.post('/create', todoApi.create);
router.post('/delete/:id', todoApi.destroy);

module.exports = router;