const Joi = require('joi');
const { Schema, model } = require('mongoose');
// const Joi = require('joi');

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
})

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const singUp = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
});

const login = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
});

const schemas = {
    singUp,
    login,
}

const User = model('user', userSchema);

module.exports = {
    User,
    schemas,
}