const { updateContactById } = require('../../models/contacts');

const updateById = async (req, res, next) => {
    const {contactId} = req.params;
    console.log(contactId);

    const body = req.body;
    console.log(body);
    
    const result = await updateContactById(contactId, body);
    res.json(result);
}

module.exports = updateById;