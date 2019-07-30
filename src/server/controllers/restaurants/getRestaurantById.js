const { createError, GENERIC_ERROR } = require('../../util/error');

/**
 * Get restaurant by id where id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getRestaurantById = (req, res, next) => {
  try {
    const { restaurant } = req;

    return res.status(200).json({
      success: true,
      body: restaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not get restaurant with the specified id',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getRestaurantById;
