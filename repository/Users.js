const { User } = require('../models/user');
require("colors")

class Users {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error.message.red);
        }        
    }
    
    async getUser(query) {
        try {
            const user = await User.findOne( query );
            // console.log(user.green);
            return user;
        } catch (error) {
            console.log(error.message.red);
        }
    }

    async updateById(id, update) {
        try {
            const result = await User.findByIdAndUpdate(id, update);
            return result;
        } catch (error) {
            
        }
    }
}

module.exports = new Users();