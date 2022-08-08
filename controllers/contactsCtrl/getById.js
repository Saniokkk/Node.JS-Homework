// const { getContactById } = require('../../models/contacts');
const createError = require('../../helpers/createError');
const { Contact } = require('../../models/contacts.js');

const getById = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await Contact.find({ _id: contactId });
    console.log(result);
    if (!result) {
        throw createError(404);
    }
    
    res.json(result);
}

module.exports = getById;