const searchAuthorModel = require('../models/searchBookModel')

const listBooks = (req, res) => {
    const data = searchAuthorModel.getAllBooks();
    res.json(data)
}

module.exports = {
    listBooks
}