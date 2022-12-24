const {User} = require("../database/models")

const createUser = async ({fullName, email, password}) => {
    return await User.create({
        fullName,
        email,
        password
    })
}

const getUser = async () => {
    return await User.findAll()
}

const editUser = async ({id, fullName, email, password}) => {
    return await User.update(
        {
        fullName, email, password
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
    getUser,
    editUser
}

module.exports = userRepo;