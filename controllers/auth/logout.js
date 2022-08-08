const createError = require("../../helpers/createError");
const { User } = require("../../models/user");

const logout = async (req, res) => {
    const { _id: id } = req.body;
    const user = await User.findOne({ id });
    if (!user) {
        throw createError(401)
    }
    await User.findByIdAndUpdate( id, { token: '' });
    res.status(204).send('No Content');
}

module.exports = logout;