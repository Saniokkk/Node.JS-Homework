const bcrypt = require('bcryptjs');
const createError = require('../../helpers/createError');
const { schemas } = require('../../models/user');
const Users = require('../../repository/Users');
const gravatar = require('gravatar');
const {v4: uuid } = require('uuid');
const sendEmail = require('../../helpers/sendEmail');
require("colors")

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const { error } = schemas.signUp.validate(req.body);
    console.log(req.body);
    console.log(error);
    if (error) {
        throw createError(400, error.message);
    }
    const user = await Users.getUser( {email} );
    console.log("user", user);
    if (user) {
        throw createError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = uuid();

    const result = await Users.create({ name, email, password: hashPassword, avatarURL, verificationToken });

    const mail = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`
    }

    await sendEmail(mail);
    res.status(201).json({
    user: {
        email: result.email,
        subscription: "starter"
        }
    })
}

module.exports = signUp;