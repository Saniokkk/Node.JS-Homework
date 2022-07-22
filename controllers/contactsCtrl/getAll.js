// const { listContacts } = require('../../models/contacts');
const {Contact} = require('../../schemas/contacts')

const getAll = async (req, res, next) => {
    const result = await Contact.find();
    console.log(result);
    res.json(result);
}

module.exports = getAll;