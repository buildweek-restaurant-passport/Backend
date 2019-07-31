const express = require('express');
const {
  getRestaurants,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
  getByCityId,
  addUserVisitedRestaurant,
  getAllVisitedRestaurant,
} = require('../controllers/restaurants');
const { validateIdParameter, validateRestaurantBody } = require('../middleware/restaurants');
const verifyToken = require('../middleware/auth/verifyToken');

const router = express.Router();

router.param('id', validateIdParameter);

router
  .route('/restaurants')
  .get(getRestaurants)
  .post(verifyToken, validateRestaurantBody, addRestaurant);

router.route('/restaurants/city/:cityId').get(verifyToken, getByCityId);

router.route('/restaurants/visited').get(verifyToken, getAllVisitedRestaurant);

router
  .route('/restaurants/:id')
  .get(getRestaurantById)
  .put(validateRestaurantBody, updateRestaurant);

router.route('/restaurants/:id/visited').post(verifyToken, addUserVisitedRestaurant);

module.exports = router;
