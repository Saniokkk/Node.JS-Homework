const createError = require('../../helpers/createError');
const { Contact } = require('../../models/contacts.js');


const getById = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await Contact.findByIdAndRemove({ _id: contactId });
    if (!result) {
        throw createError(404);
    }
    
    res.json({"message": "contact deleted"});
}

module.exports = getById;