/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('visited_restaurant').insert([
    {
      userId: 1,
      restaurantId: 1,
    },
  ]);
};
