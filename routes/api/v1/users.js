const express = require('express');
const router = express.Router();
const userApi = require('../../../controllers/api/v1/user_api');

router.post('/sign-up', userApi.create);
router.get('/login', userApi.login);

module.exports = router;