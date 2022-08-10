const Contacts = require("../repository/Contacts");


const isFavorite = async (req, res, next) => {
    const query = req.query;
    console.log(query);
    if (query.favorite) {
        const result = await Contacts.getFavorite(query.favorite);
        res.json(result)
    }
    next()
}

module.exports = isFavorite;