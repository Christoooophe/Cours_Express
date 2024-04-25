const searchAuthorModel = require('../models/searchBookModel')
const searchAuthor = (req, res) => {
    const name = req.params.auteur;
    const bookFind = searchAuthorModel.searchByAuthor(name)
    if (bookFind === undefined) {
        res.send("Cet auteur n'existe pas ou n'a pas de livre connu dans le fichier")
    }
    res.send(bookFind);
}

module.exports = {
    searchAuthor
}