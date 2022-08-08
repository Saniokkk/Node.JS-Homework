const createError = require('../../helpers/createError');
const { Contact, updateFavoriteSchema } = require('../../models/contacts');

const updateStatusContact = async (req, res, next) => {
    const { contactId } = req.params;
    const body = req.body;
    console.log(body);
    
    const { error } = updateFavoriteSchema.validate(body);
    if (error) {
        throw createError(400, error.message);
        // throw createError(400, "message: missing field favorite");
    }

    const result = await Contact.findByIdAndUpdate({ _id: contactId }, body, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateStatusContact;