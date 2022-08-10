const createError = require("../../helpers/createError");
const { schemas } = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../../repository/Users");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;

    const { error } = schemas.login.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }

    const user = await Users.getUser( {email} );
    if (!user) {
        throw createError(401, "Email or password is wrong");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    console.log(comparePassword);
    if (!comparePassword) {
        throw createError(401, "Email or password is wrong");
    }
    
    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
    console.log(token);
    await Users.updateById(user._id, {token})
    res.json({
        token,
        user: {
            email: email,
            subscription: "starter"
  }
})
}

module.exports = login;