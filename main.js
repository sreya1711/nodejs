const express = require("express");
const app = express();
//use json.. whenever middleware is used along with that json is used(Middleware to read json body)
app.use(express.json());
const userRouter = require("./routes/userRoutes");
app.use("/users", userRouter);
app.listen(3000,() => {
    console.log("Server connected successfully");
});