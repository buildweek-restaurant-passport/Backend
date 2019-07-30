const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Add new restaurant
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRestaurant = (req, res, next) => {
  try {
    const restaurantDetails = req.body.sanitizedBody;

    const restaurant = Restaurant.insert(restaurantDetails);

    return res.status(201).json({
      success: true,
      message: 'New restaurant created',
      body: restaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not create new restaurant',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = addRestaurant;
