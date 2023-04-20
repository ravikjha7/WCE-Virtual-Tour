const { addTourToDatabase, getTours, getTour } = require('./../helpers/tours');

module.exports.addTour = async (req, res) => {

    try {
        
        const tour = await addTourToDatabase(req.body);
        if(tour.error) {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(201).json(tour);

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }

}

module.exports.getAllTours = async (req, res) => {

    try {
        
        const tours = await getTours();
        if(tours.error) {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(201).json(tours);

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }

}

module.exports.getTourById = async (req, res) => {

    try {
        
        const tour = await getTour(req.params.id);
        if(tour.error) {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(201).json(tour);

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }

}