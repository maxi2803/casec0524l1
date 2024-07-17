// product.js
const express = require('express');
const router = express.Router();

const list = [
    { id: 1, title: 'Áo thun 1', content: 100000},
    { id: 2, title: 'Áo thun 2', content: 100000},
    { id: 3, title: 'Áo thun 3', content: 100000}
];

router.get("/", (req, res) => {
    res.json(list);
});
router.post("/", (req, res) => {
    const newData = {
        id:  (new Date()).getTime(),
        title: req.body.title,
        content: req.body.content
    };
    list.push(newData);
    res.status(201).send(newData);
});
module.exports = router;
