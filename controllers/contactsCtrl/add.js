const { addSchema } = require('../../schemas/contacts');
const createError = require('../../helpers/createError');
const { Contact } = require('../../schemas/contacts.js');

const add = async (req, res, next) => {
    const contact = req.body;
    const { error } = addSchema.validate(contact);
    
    if (error) {
        throw createError(400, error.message)
    }
    const result = await Contact.create(contact);
    res.status(201).json(result);
    
}


module.exports = add;