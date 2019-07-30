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
    const restaurants = await Restaurant.getAll();

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
