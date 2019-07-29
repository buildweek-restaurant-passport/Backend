const Joi = require('@hapi/joi');

/**
 * Validate request body
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @param {object} schema
 */
const joiValidate = (req, res, next, schema) => {
  // validate request body against predefined schema
  const { error, value } = Joi.validate(req.body, schema, {
    abortEarly: false,
  });

  // check for validation error
  if (error) {
    // Format error object of JOI
    const errors = error.details.map(current => ({
      key: current.context.key,
      message: current.message.replace(/['"]/g, ''),
    }));

    return res.status(400).json({ errors });
  }

  // Note: create a new key `sanitizedBody` to the body with sanitized value
  req.body.sanitizedBody = value;

  return next();
};

module.exports = joiValidate;
