const { addSchema } = require('../../models/contacts');
const createError = require('../../helpers/createError');
const Contacts = require('../../repository/Contacts');

const add = async (req, res, next) => {
    const contact = req.body;
    const { error } = addSchema.validate(contact);

    if (error) {
        throw createError(400, error.message);
    }
    const user = await Contacts.getContact({ email: contact.email });
    if (user) {
        throw createError(409)
    };
    
    const result = await Contacts.add( contact );
    console.log("result".blue, result);
    res.status(201).json(result);
    
}

module.exports = add;