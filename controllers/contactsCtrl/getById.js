// const { getContactById } = require('../../models/contacts');
const createError = require('../../helpers/createError');
const Contacts = require('../../repository/Contacts');

const getById = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await Contacts.getContact({ _id: contactId });
    if (!result) {
        throw createError(404);
    }
    
    res.json(result);
}

module.exports = getById;