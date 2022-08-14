const userService = require("./user.service");

const createUser = async (req, res) => {
    const {fullname, email, password} = req.body;
    try {
        const createdUser = await userService.createUser({fullname, email, password})
        return res.status(200).json(createdUser)
    } catch (error) {
        return res.status(500).json({ message: "Create user failed!" });
    } 
}

const editUser = async (req, res) => {
    try {
        const {userId} = req.params
        const {fullname, email, password} = req.body
        const editedUser = await userService.editUser({
            id: userId,
            fullname,
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
    editUser
}

module.exports = userController;