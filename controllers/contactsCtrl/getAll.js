// const { listContacts } = require('../../models/contacts');
const {Contact} = require('../../schemas/contacts')

const getAll = async (req, res, next) => {
    const result = await Contact.find();
    res.json(result);
}

module.exports = getAll;