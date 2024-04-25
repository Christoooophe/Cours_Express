const express = require('express');
const router = express.Router();

const searchAuthorController = require('../controllers/searchAuthorController');

router.get('/recherche-livre/auteur/:auteur', searchAuthorController.searchAuthor)

module.exports = router;