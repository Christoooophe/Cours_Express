const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController');

router.post('/add', addController.addBook)

module.exports = router;