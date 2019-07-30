const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR, CONFLICT } = require('../../util/error');

/**
 * Add new restaurant
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRestaurant = async (req, res, next) => {
  try {
    const restaurantDetails = req.body.sanitizedBody;

    const restaurant = await Restaurant.insert(restaurantDetails);

    return res.status(201).json({
      success: true,
      message: 'New restaurant created',
      body: restaurant,
    });
  } catch (error) {
    if (error.code && error.code === 'SQLITE_CONSTRAINT') {
      return next(
        createError({
          message: `Restaurant with name: ${req.body.name} already exist`,
          status: CONFLICT,
        }),
      );
    }

    return next(
      createError({
        message: 'Could not create new restaurant',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = addRestaurant;
