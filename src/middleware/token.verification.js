require("dotenv").config()
const jwt = require("jsonwebtoken")

const tokenVerification = async (req, res, next) => {
    const authHeaders = req.headers["authorization"]
    const token = authHeaders && authHeaders.split(" ")[1]

    if(!token) {
        return res.send("Missing Authorization headers")
    }

    try {
        //verify token and include user data for later request
        const user = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.auth = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = tokenVerification