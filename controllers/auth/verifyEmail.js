const createError = require("../../helpers/createError");

const { basedir } = global;

const { User } = require(`${basedir}/models/user`);

const verifyEmail = async (req, res) => {
    const verificationToken = req.params;

    const user = User.findOne({ verificationToken });

    if (!user) {
        throw createError(404);
    }

    await User.findByIdAndUpdate(user._id, { verificationToken: "", verify: true });

    res.json({
        message: "Verification successful"
    })
    
}

module.exports = verifyEmail;