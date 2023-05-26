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
    left: Object,
    right: Object,
    up: Object,
    down: Object,
    lat: String,
    lng: String

});

module.exports = Mongoose.model('Tour', TourSchema);