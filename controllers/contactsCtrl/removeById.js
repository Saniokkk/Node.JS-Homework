const { removeContact } = require('../../models/contacts');


const getById = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await removeContact(contactId);
    
    res.json(result);
}

module.exports = getById;