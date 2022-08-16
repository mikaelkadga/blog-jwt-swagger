const {User} = require("../database/models")

const createUser = async ({fullname, email, password}) => {
    return await User.create({
        fullname,
        email,
        password
    })
}

const getUser = async () => {
    return await User.findAll()
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
    getUser,
    editUser
}

module.exports = userRepo;