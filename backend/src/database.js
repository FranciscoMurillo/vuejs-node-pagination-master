const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mevn-pagination', {
   useNewUrlParser: true
})
    .then(db => console.log('Base de datos Conectada!'))
    .catch(err => console.log(err));