const mongoose = require('mongoose'),
schema = mongoose.Schema;

let Movie = new schema({
    movieName: {
        type: String
    },
    category: {
        type: String
    },
    details: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Movie', Movie);