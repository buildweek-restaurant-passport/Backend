const express = require('express');
const { getRestaurants, getRestaurantById } = require('../controllers/restaurants');
const { validateIdParameter } = require('../middleware/restaurants');

const router = express.Router();

router.param('id', validateIdParameter);

router.route('/restaurants').get(getRestaurants);

router.route('/restaurants/:id').get(getRestaurantById);

module.exports = router;
