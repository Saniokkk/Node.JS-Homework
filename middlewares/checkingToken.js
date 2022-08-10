const jwt = require('jsonwebtoken');

const { User } = require('../models/user');

const { createError } = require('../helpers/createError');

const {SECRET_KEY} = process.env;

const checkingToken = async(req, _, next) => {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");
    if(bearer !== "Bearer") {
        next(createError(401));
    }
    try {
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user || !user.token) {
            next(createError(401));
        }
        req.user = user;
        console.log(user)
        next()
    } catch (error) {
        next(createError(401, error.message));
    }
}

module.exports = checkingToken;