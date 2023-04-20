const Mongoose = require('mongoose');

const TourSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    left: String,
    right: String,
    up: String,
    down: String

});

module.exports = Mongoose.model('Tour', TourSchema);