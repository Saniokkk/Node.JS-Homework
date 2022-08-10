// const { listContacts } = require('../../models/contacts');
const Contacts = require('../../repository/Contacts');



const getAll = async (req, res, next) => {
    const result = await Contacts.getAll();
    res.json(result);
}


module.exports = getAll;