const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express().use(bodyParser.json());
const PORT = process.env.PORT || '1337';

app.get('/', (req, res) => res.send('hello'));

app.use(morgan('dev'));
app.use('/webhook', require('./webhook'));

app.listen(PORT, () => console.log(`Listening of ${PORT}`));
