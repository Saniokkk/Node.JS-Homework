const createError = require('../../helpers/createError');
const { Contact, addSchema } = require('../../schemas/contacts');

const updateById = async (req, res, next) => {
    const { contactId } = req.params;

    const { error } = addSchema.validate(req.body);

    if (error) {
        throw createError(404, error.message);
    }

    const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;