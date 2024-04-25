const users = require('../../data/users.json')

const getAllUsers = () => {
    return users;
}

module.exports = {
    getAllUsers
}