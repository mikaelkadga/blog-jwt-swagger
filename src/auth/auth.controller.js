require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("./auth.service");

const login = async (req, res) => {
    const { email, password } = req.body;
    const existUser = await authService.findUser(email);
    
    //   email checking
    if (!existUser) return res.status(404).json({ message: "User not found" });
  
    //   password checking
    const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
    if (isPasswordCorrect) {

      // generating jwt
      const token = await jwt.sign(
        {
          id: existUser.id,
          fullName: existUser.fullName,
          email: existUser.email
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" }
      );

      // console.log(existUser)
      // console.log(token)
      return res.json({accessToken: token});
    } else {
      return res.send("Login failed");
    }
  }

  const authController = {
      login
  }

  module.exports = authController