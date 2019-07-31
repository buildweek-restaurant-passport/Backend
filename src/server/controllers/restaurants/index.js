const getRestaurants = require('./getRestaurants');
const getRestaurantById = require('./getRestaurantById');
const addRestaurant = require('./addRestaurant');
const updateRestaurant = require('./updateRestaurant');
const getByCityId = require('./getByCityId');
const addUserVisitedRestaurant = require('./addUserVisitedRestaurant');
const getAllVisitedRestaurant = require('./getAllVisitedRestaurant');
const deleteUserVisitedRestaurant = require('./deleteUserVisitedRestaurant');

module.exports = {
  getRestaurants,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
  getByCityId,
  addUserVisitedRestaurant,
  getAllVisitedRestaurant,
  deleteUserVisitedRestaurant,
};
