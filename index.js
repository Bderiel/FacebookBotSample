const express = require('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());
const PORT = process.env.PORT || '1337';

app.use('/webhook', require('./webhook'));

app.listen(PORT, () => console.log(`Listening of ${PORT}`));
