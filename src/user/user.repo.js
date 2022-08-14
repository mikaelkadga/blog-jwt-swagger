const {User} = require("../database/models")

const createUser = async ({fullname, email, password}) => {
    return await User.create({
        fullname,
        email,
        password
    })
}

const editUser = async ({id, fullname, email, password}) => {
    return await User.update(
        {
        fullname, email, password
        },
        {
            where: {
                id
            },
            returning: true
        }
    )
}

const userRepo = {
    createUser,
    editUser
}

module.exports = userRepo;