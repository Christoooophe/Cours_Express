const express = require('express')
const router = express.Router();

const listUsers = require('./getListUsersRouter');

router.get('/', (req, res) => {
    res.send("Bienvenue cher ami")
})

router.use('/', listUsers)

module.exports = router;