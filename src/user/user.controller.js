const userService = require("./user.service");

const createUser = async (req, res) => {
    const {fullName, email, password} = req.body;
    try {
        const createdUser = await userService.createUser({fullName, email, password})
        return res.status(200).json(createdUser)
    } catch (error) {
        return res.status(500).json({ message: "Create user failed!" });
    } 
}

const getUser = async (req, res) => {
    try {
        const allUser = await userService.getUser()
        return res.status(200).json(allUser)
    } catch (error) {
        return res.status(500).json({ message: "get user failed!" });
    }
}

const editUser = async (req, res) => {
    try {
        const {userId} = req.params
        const {fullName, email, password} = req.body
        const editedUser = await userService.editUser({
            id: userId,
            fullName,
            email,
            password
        })
        return res.status(200).json(editedUser)
    } catch (error) {
        return res.status(500).json({ message: "Edit user failed!" });
    }
}

const userController = {
    createUser,
    getUser,
    editUser
}

module.exports = userController;