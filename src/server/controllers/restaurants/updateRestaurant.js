const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Update restaurant details where id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateRestaurant = async (req, res, next) => {
  try {
    const restaurantDetails = req.body.sanitizedBody;

    const { id } = req.restaurant;

    const restaurant = await Restaurant.update(id, restaurantDetails);

    return res.status(201).json({
      success: true,
      message: 'Restaurant details updated',
      body: restaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not update restaurant details',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = updateRestaurant;
