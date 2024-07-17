const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const userRouter = require('./router/user');
const productRouter = require('./router/product');
const studentRouter = require('./router/student');
const postRouter = require('./router/post');

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/students", studentRouter);
app.use("/posts", postRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
