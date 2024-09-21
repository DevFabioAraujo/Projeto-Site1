const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/online-store', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;