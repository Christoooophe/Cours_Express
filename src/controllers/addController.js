const addBook = (req, res) => {
    res.status(201).json({
        message: 'Livre ajouté !'
    });
}

module.exports = {
    addBook
}