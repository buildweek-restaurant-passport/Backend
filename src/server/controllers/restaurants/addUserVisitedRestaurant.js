const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Add user visited restaurant
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addUserVisitedRestaurant = async (req, res, next) => {
  try {
    const restaurantId = req.params.id;

    const visitedRestaurant = await Restaurant.addVisited({ userId: req.user.id, restaurantId });

    return res.status(201).json({
      success: true,
      body: visitedRestaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not add user visited restaurant',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = addUserVisitedRestaurant;
