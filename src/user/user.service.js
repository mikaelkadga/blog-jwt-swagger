const userRepo = require("./user.repo")
const bcrypt = require("bcrypt")

const createUser = async ({fullName, email, password}) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return await userRepo.createUser({
        fullName, email, password: hashPassword
    })
}

const getUser = async () => {
    return await userRepo.getUser()
}

const editUser = async ({id, fullName, email, password}) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return await userRepo.editUser({id, fullName, email, password: hashPassword})
}

const userService = {
    createUser,
    getUser,
    editUser
}

module.exports = userService;