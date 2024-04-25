const listBooks = (req, res) => {
    const data = require('../../data/livres.json')
    res.json(data)
}

module.exports = {
    listBooks
}