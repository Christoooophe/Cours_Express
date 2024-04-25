const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController');

router.get('/liste', listController.listBooks);

module.exports = router;