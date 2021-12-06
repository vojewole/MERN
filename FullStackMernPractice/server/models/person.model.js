const mongoose = require('mongoose')

const PersonSchema =  new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: {type: String, required: true}
}, {timeStamp: true});

module.exports = mongoose.model('Person', PersonSchema);