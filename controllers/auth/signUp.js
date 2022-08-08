const bcrypt = require('bcryptjs');
const createError = require('../../helpers/createError');
// const schemas = require('../../models');
const { User, schemas } = require('../../models/user');

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const { error } = schemas.signUp.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }
    
    const user = User.findOne({ email });
    console.log(req.body);
    if (user) {
        throw createError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    User.create({ name, email, hashPassword });
    
    res.status(201).json({
    user: {
        email,
        subscription: "starter"
        }
    })

}

module.exports = signUp;