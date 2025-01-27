const express = require("express");
require("./config/databse");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// rendering the file
app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'search.html'));
});

app.get('/favourites', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'favourites.html'));
});

const port = 8000;

app.use("/api", require("./routes/routes"))

// connecting with our port
app.listen(port, (err) => {
    if (err) {
        console.error("error in litening the port", err)
    }
    console.log("server is litening the port", port)
})