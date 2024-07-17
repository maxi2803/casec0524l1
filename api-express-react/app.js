const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const productRouter = require('./router/product');
const categoryRouter = require('./router/category');

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
