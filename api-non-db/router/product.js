// product.js
const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Áo thun', price: 100000, quantity: 10 },
    { id: 2, name: 'Quần jeans', price: 200000, quantity: 20 },
    { id: 3, name: 'Giày thể thao', price: 1200000, quantity: 5 },
    { id: 4, name: 'Mũ bảo hiểm', price: 350000, quantity: 15 }
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.post("/", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});

router.delete("/:id", (req, res) => {
    const id = +req.params.id;
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.send({ message: 'Product deleted', id: id });
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.put("/:id", (req, res) => {
    const id = +req.params.id;
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index].name = req.body.name;
        products[index].price = req.body.price;
        products[index].quantity = req.body.quantity;
        res.send(products[index]);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

module.exports = router;
