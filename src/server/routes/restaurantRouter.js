const express = require('express');
const {
  getRestaurants, getRestaurantById, addRestaurant, updateRestaurant,
} = require('../controllers/restaurants');
const { validateIdParameter, validateRestaurantBody } = require('../middleware/restaurants');
const verifyToken = require('../middleware/auth/verifyToken');

const router = express.Router();

router.param('id', validateIdParameter);

router
  .route('/restaurants')
  .get(getRestaurants)
  .post(verifyToken, validateRestaurantBody, addRestaurant);

router
  .route('/restaurants/:id')
  .get(getRestaurantById)
  .put(validateRestaurantBody, updateRestaurant);

module.exports = router;
