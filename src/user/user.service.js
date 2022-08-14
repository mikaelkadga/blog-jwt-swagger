const userRepo = require("./user.repo")
const bcrypt = require("bcrypt")

const createUser = async ({fullname, email, password}) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return await userRepo.createUser({
        fullname, email, password: hashPassword
    })
}

const editUser = async ({id, fullname, email, password}) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return await userRepo.editUser({id, fullname, email, password: hashPassword})
}

const userService = {
    createUser,
    editUser
}

module.exports = userService;