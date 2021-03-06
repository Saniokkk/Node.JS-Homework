const express = require('express');
const ctrl = require('../../controllers/contactsCtrl');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', ctrlWrapper(ctrl.updateById));

router.put('/:contactId/favorite', ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
