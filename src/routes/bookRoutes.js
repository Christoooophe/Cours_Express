const express = require('express')
const router = express.Router();

const listBooksRouter = require('./listBooksRouter');
const bookDetailsRouter = require('./bookDetailsRouter');
const addBookRouter = require("./addBookRouter");
const searchAuthorRouter = require("./searchAuthorRouter");

router.get('/livres', (req, res) => {
    res.send("Bienvenue")
})

router.use('/livres', listBooksRouter)
router.use('/livres', bookDetailsRouter)
router.use('/livres', addBookRouter)
router.use('/livres', searchAuthorRouter)

module.exports = router;