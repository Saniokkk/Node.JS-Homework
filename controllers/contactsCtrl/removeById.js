const createError = require('../../helpers/createError');
const Contacts = require('../../repository/Contacts');


const removeById = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await Contacts.removeById( contactId );
    if (!result) {
        throw createError(404);
    }
    
    res.json({"message": "contact deleted"});
}

module.exports = removeById;