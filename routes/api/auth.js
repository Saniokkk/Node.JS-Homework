const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/auth');

router.post('/signup', ctrl.signUp);

router.post('/login', ctrl.login);

router.post('/logout', ctrl.logout);

module.exports = router;