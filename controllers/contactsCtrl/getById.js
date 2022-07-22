// const { getContactById } = require('../../models/contacts');
const createError = require('../../helpers/createError');
const { Contact } = require('../../schemas/contacts.js');

const getById = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await Contact.find({contactId});
    if (!result) {
        throw createError(404);
    }
    
    res.json(result);
}

module.exports = getById;