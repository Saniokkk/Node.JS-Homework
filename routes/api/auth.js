const express = require('express');
const upload = require('../../middlewares/upload')

const router = express.Router();

const ctrlWrapper = require('../../helpers/ctrlWrapper');

const ctrl = require('../../controllers/auth');

const {checkingToken} = require('../../middlewares/');

router.post('/signup', ctrlWrapper(ctrl.signUp));

router.post('/login', ctrlWrapper(ctrl.login));

router.get('/current', checkingToken, ctrlWrapper(ctrl.getCurrent))

router.post('/logout', checkingToken, ctrlWrapper(ctrl.logout));

router.patch('/avatars', checkingToken, upload.single('avatar'), ctrlWrapper(ctrl.setAvatar));

module.exports = router;