/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('visited_restaurant').insert([
    {
      user_id: 1,
      restaurant_id: 2,
    },
  ]);
};
