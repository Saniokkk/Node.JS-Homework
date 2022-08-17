const createError = require("../../helpers/createError");
const Users = require("../../repository/Users");

const logout = async (req, res) => {
    const { _id: id } = req.user;
    console.log((id).red);
    const user = await Users.getUser(id)
    // console.log(user);
    if (!user) {
        throw createError(401)
    }
    await Users.updateById(id, { token: '' })
    console.log('delete'.red);
    res.status(204).send('No Content')
}

module.exports = logout;