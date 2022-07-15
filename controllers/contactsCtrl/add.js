const { addContact } = require('../../models/contacts');


const add = async (req, res, next) => {
    const contact = req.body;

    const result = await addContact(contact);
    res.json(result);
}

module.exports = add;