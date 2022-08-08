const bcrypt = require('bcryptjs');
const createError = require('../../helpers/createError');
const { User, schemas } = require('../../models/user');

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const { error } = schemas.signUp.validate(req.body);
    console.log(req.body);
    console.log(error);
    if (error) {
        throw createError(400, error.message);
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
        throw createError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword)
    const result = await User.create({ name, email, password: hashPassword });
    res.status(201).json({
    user: {
        email: result.email,
        subscription: "starter"
        }
    })

}

module.exports = signUp;