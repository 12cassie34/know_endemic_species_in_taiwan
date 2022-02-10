const port = 34567;

const cors = require('cors')
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())

const menu = require('./menu.json');

app.post('/getMenu/', (req = {}, res) => {
    res.send(menu);
});
