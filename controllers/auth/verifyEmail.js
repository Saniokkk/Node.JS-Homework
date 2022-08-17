const createError = require("../../helpers/createError");
const Users = require("../../repository/Users");
require('colors')

const { basedir } = global;

const { User } = require(`${basedir}/models/user`);

const verifyEmail = async (req, res) => {
    const verificationToken = req.params;
    const user = await Users.getUser( verificationToken );
    console.log(user);
    if (!user) {
        throw createError(404);
    }
    await User.findByIdAndUpdate(user._id, { verificationToken: "", verify: true });

    res.json({
        message: "Verification successful"
    })
    
}

module.exports = verifyEmail;