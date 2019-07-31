/* eslint-disable max-len */
const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR, NOT_FOUND } = require('../../util/error');

/**
 * Delete user visited restaurant given user id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUserVisitedRestaurant = async (req, res, next) => {
  try {
    const { id } = req.restaurant;

    const restaurant = await Restaurant.getVisitedByRestaurantId({ userId: req.user.id, restaurantId: id });

    if (!restaurant) {
      return next(
        createError({
          message: 'Visited restaurant with specified id is invalid',
          status: NOT_FOUND,
        }),
      );
    }

    await Restaurant.removeVisited({ userId: req.user.id, restaurantId: id });

    return res.status(200).json({
      success: true,
      message: 'Restaurant deleted successfully',
      body: req.restaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not delete restaurant with the given id',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = deleteUserVisitedRestaurant;
