const { updateContactById } = require('../../models/contacts');

const updateById = async (req, res, next) => {
    const id = req.params;
    console.log(id);

    const body = req.body;
    console.log(body);
    
    const result = await updateContactById(id, body);
    res.json(result);
}

module.exports = updateById;