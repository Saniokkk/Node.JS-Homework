const signUp = require('./signUp');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const setAvatar = require('./setAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
    signUp,
    login,
    logout,
    getCurrent,
    setAvatar,
    verifyEmail,
    resendVerifyEmail,
}