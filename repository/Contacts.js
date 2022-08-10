const { Contact } = require('../models/contacts');

class Contacts {
    async add(contact) {
        try {
            const result = await Contact.create(contact);
            return result;
        } catch (error) {
            console.log(error.message.red);
        }
    }
    
    async getAll() {
        try {
            const result = await Contact.find();
            return result;
        } catch (error) {
            console.log(error.message.red);
        }
    }

    async getContact(contact) {
        try {
            console.log(contact);
            const result = await Contact.findOne(contact);
            return result;
        } catch (error) {
            console.log(error.message.red);
        }
    }

    async removeById(id) {
        try {
            const result = await Contact.findByIdAndRemove({ _id: id });
            return result;
        } catch (error) {
            console.log(error.message.red);
        }
    }

    async updateById(id, data) {
        try {
            const result = await Contact.findByIdAndUpdate({ _id: id }, data, { new: true });
            return result;
        } catch (error) {
            console.log(error.message.red);
        }
    }

}


module.exports = new Contacts();