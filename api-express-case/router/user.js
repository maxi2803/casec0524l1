const express = require('express');
const router = express.Router();

const users = [];

router.post("/register", (req, res) => {
    const { name, username, password, dob } = req.body;
    const exists = users.some(user => user.username === username);
    if (exists) {
        return res.status(409).json({ message: "Username already exists" });
    }
    const newUser = {
        id: users.length + 1,
        name,
        username,
        password,
        dob
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if(username === 'admin' && password === 'maxmax'){
        res.json({ message: "Login successful", account: username });
    }else{
        return res.status(401).json({ message: "Invalid username or password" });
    }
});

module.exports = router;
