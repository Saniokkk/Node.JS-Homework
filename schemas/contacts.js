const Joi = require("joi");
const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
},{ versionKey: false },);

const Contact = model('contacts', contactSchema);

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean()
});

const updateByIdSchema = Joi.object();

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})


module.exports = {
    addSchema,
    updateByIdSchema,
    updateFavoriteSchema,
    Contact
}