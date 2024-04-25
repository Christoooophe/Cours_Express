const express = require('express');
const router = express.Router();

const detailsController = require('../controllers/listUsersController');

router.get('/liste', detailsController.listUsers );

module.exports = router;