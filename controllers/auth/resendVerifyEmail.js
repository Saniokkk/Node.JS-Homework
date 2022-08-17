const createError = require("../../helpers/createError");
const sendEmail = require("../../helpers/sendEmail");

const { basedir } = global;

const { User } = require(`${basedir}/models/user`);

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw createError(400, "missing required field email");
    }

    const user = User.findOne({ email });
    if (user.verify) {
        throw createError(400, "Verification has already been passed");
    }

    const mail = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a target="_blank" href="http://localhost:3000/user/verify/${user.verificationToken}">Нажмите для подтверждения регистрации</a>`
    }

    await sendEmail(mail);
    res.json({
        message: "Verification email sent"
    })
}

module.exports = resendVerifyEmail;