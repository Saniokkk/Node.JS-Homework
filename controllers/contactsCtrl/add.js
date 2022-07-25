const { addSchema } = require('../../models/contacts');
const createError = require('../../helpers/createError');
const { Contact } = require('../../models/contacts.js');

const add = async (req, res, next) => {
    // const { name, email, phone } = req.body;
    const contact = req.body;
    const { error } = addSchema.validate(contact);

    if (error) {
        throw createError(400, error.message);
    }
    const user = await Contact.findOne({email: contact.email});
    if (user) {
        throw createError(409)
    };
    
    const result = await Contact.create(contact);
    res.status(201).json(result);
    
}

module.exports = add;