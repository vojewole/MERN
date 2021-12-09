const mongoose = require('mongoose');

AuthorSchema = new mongoose.Schema({
      name: {type: String, required: true, minLength: 3},
    }
) 

module.exports = mongoose.model('Author', AuthorSchema);