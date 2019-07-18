const express = require('express');
const app = express();
let { PORT } = require('../config');
// require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const path = require('path');

PORT = PORT || 5000;

app.use(cors())
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/products', express.static(path.join(__dirname, '../dist')));
app.use('/products/:id', express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));