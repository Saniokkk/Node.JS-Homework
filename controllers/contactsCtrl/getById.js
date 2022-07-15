const { getContactById } = require('../../models/contacts');


const getById = async (req, res, next) => {
    const { contactId } = req.params;
    console.log(contactId)
    const result = await getContactById(contactId);
    res.json(result);
}

module.exports = getById;