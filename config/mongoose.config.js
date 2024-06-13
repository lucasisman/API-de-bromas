const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chistes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to the database"))
    .catch(err => console.error("Something went wrong", err));
