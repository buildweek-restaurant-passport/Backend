const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');

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

    await Restaurant.removeVisited({ userId: req.userId, restaurantId: id });

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
