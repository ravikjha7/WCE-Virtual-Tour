const express = require("express");
const router = express.Router();

const tours = require('./../controllers/tours');

router.route('/').post(tours.addTour);
router.route('/:id').get(tours.getTourById);
router.route('/').get(tours.getAllTours);

module.exports = router;