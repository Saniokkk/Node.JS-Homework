const path = require("path");
const fs = require("fs/promises");
const resizeAvatar = require("../../helpers/resizeAvatar");
const Users = require("../../repository/Users");
require('colors')

const {basedir} = global;

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res, next) => {
    try {
        const {_id} = req.user;
        const {path: tempPath, originalname} = req.file;
        const [extension] = originalname.split(".").reverse();
        const newName = `${_id}.${extension}`;
        const uploadPath = path.join(avatarsDir, newName);
        await fs.rename(tempPath, uploadPath);

        await resizeAvatar(uploadPath);
        
        const avatarURL = path.join("avatars", newName);
        await Users.updateById(_id, {avatarURL});
        res.json({
            avatarURL,
        })
    } catch (error) {
        await fs.unlink(req.file.path);
        throw error;
    }    
}

module.exports = setAvatar;