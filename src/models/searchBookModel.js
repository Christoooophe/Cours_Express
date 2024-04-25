const data = require("../../data/livres.json");

const searchByAuthor = (name) => {
    return data.find(book => book.author === name);
}

const searchById = (id) => {
    return data.find(book => book.id === id);
}

module.exports = {
    searchByAuthor,
    searchById
}