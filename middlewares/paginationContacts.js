const Contacts = require("../repository/Contacts");

const paginationContacts = async (req, res, next) => {
    const {page, limit} = req.query;
    if (page && limit) {
        const result = await Contacts.getPageContacts(page, limit);
        res.json(result)
    }
    next()
}

module.exports = paginationContacts;