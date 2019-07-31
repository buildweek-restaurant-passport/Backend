const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Get all users visited restaurant
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllVisitedRestaurant = async (req, res, next) => {
  try {
    const visitedRestaurant = await Restaurant.getVisited(req.user.id);

    return res.status(200).json({
      success: true,
      body: visitedRestaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not get user visited restaurant list',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getAllVisitedRestaurant;
