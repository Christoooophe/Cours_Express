const express = require('express')
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const bookRoutes = require('./src/routes/bookRoutes')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.use('/', bookRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})
