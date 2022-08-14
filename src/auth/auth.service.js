const authRepo = require("./auth.repo")

const findUser = async (email) => {
    return await authRepo.findUser(email)
}

const authService = {
    findUser
}

module.exports = authService