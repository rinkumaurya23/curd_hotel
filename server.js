const express = require('express');
const app = express();
const db = require('./db')
const PORT = 8000;
const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(`Welcome to our hotel`)
});

const personRoutes = require('./routes/personRoute');
const menuItem = require('./routes/menuItem');

app.use('/person', personRoutes);
app.use('/menu', menuItem);
app.listen(PORT, () => {
    console.log(`Server is Connected PORT : ${PORT}`);
});










