const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Servidor en Puerto 3000');
});