const getCurrent = async (req, res) => {
    const { subscription, email, avatarURL } = req.user;
    
    res.json({
        email,
        subscription,
        avatarURL
    })
}

module.exports = getCurrent;