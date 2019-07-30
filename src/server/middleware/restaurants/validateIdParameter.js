const { Restaurant } = '../../models';
const { NOT_FOUND, createError } = require('../../util/error');

/**
 * Validate restaurant request parameter
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} restaurantID
 */
const validateIdParameter = async (req, res, next, restaurantID) => {
  try {
    const restaurant = await Restaurant.getById(restaurantID);

    req.restaurant = restaurant;

    return next();
  } catch (error) {
    return next(
      createError({
        message: 'No Restaurant with the given ID',
        status: NOT_FOUND,
      }),
    );
  }
};

export default validateIdParameter;
