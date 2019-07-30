const Joi = require('@hapi/joi');
const joiValidate = require('../../util/joiValidate');

/**
 * Restaurant validation schema
 */
const restaurantSchema = Joi.object().keys({
  name: Joi.string()
    .trim()
    .label('Restaurant name')
    .required(),
  country: Joi.string()
    .trim()
    .required(),
  city: Joi.string()
    .trim()
    .required(),
  type: Joi.string()
    .trim()
    .required(),
  description: Joi.string()
    .trim()
    .required(),
});

/**
 * Validate restaurant body against defined schema
 */
const validateRestaurantBody = (req, res, next) => {
  joiValidate(req, res, next, restaurantSchema);
};

module.exports = validateRestaurantBody;
