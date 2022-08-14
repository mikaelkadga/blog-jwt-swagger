const {User} = require("../database/models")

const findUser = async (email) => {
    return await User.findOne({
        where: {
            email
        },
        raw: true
    })
}

const authRepo = {
    findUser
}

module.exports = authRepo