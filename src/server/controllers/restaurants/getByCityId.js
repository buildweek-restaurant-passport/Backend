const { Restaurant } = require('../../models');
const { createError, GENERIC_ERROR, NOT_FOUND } = require('../../util/error');

/**
 * Get restaurant by city id
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getByCityId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.getByCityID(id);

    if (!restaurant) {
      return next(
        createError({
          message: `Restaurant with the city id ${id} not found`,
          status: NOT_FOUND,
        }),
      );
    }

    return res.status(200).json({
      success: true,
      body: restaurant,
    });
  } catch (error) {
    return next(
      createError({
        message: 'Could not get restaurant with the given city id',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getByCityId;
