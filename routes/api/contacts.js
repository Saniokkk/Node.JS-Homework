const express = require('express');
const ctrl = require('../../controllers/contactsCtrl');
const ctrlWrapper = require('../../helpers/ctrlWrapper');
const {checkingToken, isFavorite, paginationContacts} = require('../../middlewares/');

const router = express.Router()

router.get('/', checkingToken, isFavorite, paginationContacts, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', checkingToken, ctrlWrapper(ctrl.getById));

router.post('/', checkingToken, ctrlWrapper(ctrl.add));

router.delete('/:contactId', checkingToken, ctrlWrapper(ctrl.removeById));

router.put('/:contactId', checkingToken, ctrlWrapper(ctrl.updateById));

router.put('/:contactId/favorite', checkingToken, ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
