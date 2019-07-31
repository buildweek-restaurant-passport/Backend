const getRestaurants = require('./getRestaurants');
const getRestaurantById = require('./getRestaurantById');
const addRestaurant = require('./addRestaurant');
const updateRestaurant = require('./updateRestaurant');
const getByCityId = require('./getByCityId');
const addUserVisitedRestaurant = require('./addUserVisitedRestaurant');

module.exports = {
  getRestaurants,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
  getByCityId,
  addUserVisitedRestaurant,
};
