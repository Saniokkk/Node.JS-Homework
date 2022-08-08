const createError = require("../../helpers/createError");
const { User, schemas } = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;

    const { error } = schemas.login.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }

    const user = User.findOne({ email });
    if (!user) {
        throw createError(401, "Email or password is wrong");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
        throw createError(401, "Email or password is wrong");
    }
    
    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});
    await User.findByIdAndUpdate(user._id, {token})
    res.json({
        token,
        user: {
            email: { email },
            subscription: "starter"
        }
    })
}

module.exports = login;