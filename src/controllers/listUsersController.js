const users = require("../models/usersModel");
const listUsers = (req, res) => {
    const data = users.getAllUsers();
    res.json(data)
}

module.exports = {
    listUsers
}