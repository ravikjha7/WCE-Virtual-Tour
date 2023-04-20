const Tour = require("../models/tour")

module.exports.addTourToDatabase = async (tour) => {

    let newTour;

    try {
        newTour = await Tour.create(tour);
        return newTour;
    } catch (err) {
        newTour.err = err.message;
        return newTour;
    }

}

module.exports.getTours = async () => {

    let tours;

    try {
        tours = await Tour.find({});
        return tours;
    } catch (err) {
        tours.err = err.message;
        return tours;
    }

}

module.exports.getTour = async (id) => {

    let tour;

    try {
        tour = await Tour.findById(id);
        return tour;
    } catch (err) {
        tour.err = err.message;
        return tour;
    }

}