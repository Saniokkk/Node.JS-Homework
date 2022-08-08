const getCurrent = async(req, res) => {
    const { name, email } = req.user;
    console.log(name, email);
    res.json({
        name,
        email,
    })
}

exports.module = getCurrent;