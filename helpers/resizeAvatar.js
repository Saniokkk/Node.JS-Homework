const jimp = require('jimp')

const resizeAvatar = async (path) => {
    const avatar = await jimp.read(path);
    await avatar.cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER | jimp.VERTICAL_ALIGN_TOP);
    await avatar.writeAsync(path);
}

module.exports = resizeAvatar;