const express = require('express');
const router = express.Router();
const todoApi = require('../../../controllers/api/v1/todo_api');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}), todoApi.index);
router.post('/create', passport.authenticate('jwt', {session: false}), todoApi.create);
router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), todoApi.destroy);
router.patch('/update/:id', passport.authenticate('jwt', {session: false}), todoApi.update);

module.exports = router;