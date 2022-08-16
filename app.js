const express = require("express");
const app = express();
const port = 3000;
 

const userRouter = require("./src/user/user.route");
const authRouter = require("./src/auth/auth.route");
const postRouter = require("./src/post/post.route");

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./src/config/swagger");

app.get("/", (req, res) => {
    res.send("hi")
})

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//router
app.use(authRouter)
app.use(userRouter)
app.use(postRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})