const searchAuthorModel = require('../models/searchBookModel')

const detailsBook = (req, res) => {
    const bookId = req.params.id;
    const bookFind = searchAuthorModel.searchById(bookId);
    if (bookFind === undefined) {
        res.send("Aucun livre à cet id")
    }
    res.render('index', bookFind);
}

module.exports = {
    detailsBook
}