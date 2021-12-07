const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productmanagerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Established a connection to the database."))
.catch(err => console.log("Soemthing went wrong when connecting to the database", err));

