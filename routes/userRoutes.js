const express = require("express");
const router = express.Router();

let users = [
    { id: 1, name: "Aishuu" }
];

// GET all users
router.get("/", (req, res) => {
    res.status(200).json(users);
});

// GET user by id
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// CREATE user
router.post("/", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(user);

    res.status(201).json({
        message: "User created successfully",
        user
    });
});

// UPDATE user
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[index].name = req.body.name;

    res.json({
        message: `User ${userId} is updated successfully`,
        user: users[index]
    });
});

// DELETE user
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const newUsers = users.filter(u => u.id !== userId);

    if (newUsers.length === users.length) {
        return res.status(404).json({ message: "User not found" });
    }

    users = newUsers;

    res.json({ message: `User ${userId} deleted successfully` });
});

module.exports = router;



