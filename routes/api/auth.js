const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/auth');

router.post('/users/signup', ctrl.singUp);

router.post('/users/login', ctrl.login);

router.post('/users/logout', ctrl.logout);

module.exports = router;