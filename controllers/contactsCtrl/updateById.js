const createError = require('../../helpers/createError');
const { addSchema } = require('../../models/contacts');
const Contacts = require('../../repository/Contacts');

const updateById = async (req, res, next) => {
    const { contactId } = req.params;

    const { error } = addSchema.validate(req.body);

    if (error) {
        throw createError(404, error.message);
    }

    const result = await Contacts.updateById(contactId, req.body);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;