const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Get all restaurants
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getRestaurants = async (req, res, next) => {
  try {
    const restaurantDetails = req.body.sanitizedBody;

    const restaurants = await Restaurant.insert(restaurantDetails);

    return res.status(200).json({
      success: true,
      message: 'All restaurants',
      body: restaurants,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not get all restaurants',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getRestaurants;
