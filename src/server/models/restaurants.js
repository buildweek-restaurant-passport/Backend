const create = require('../../db/helpers/restaurants-model');

module.exports = (knex) => {
  const models = create(knex);

  return {
    ...models,
  };
};
