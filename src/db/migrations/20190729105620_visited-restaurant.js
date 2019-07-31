/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('visited_restaurant', (restaurants) => {
    restaurants.increments();
    restaurants.unique(['restaurantId', 'userId']);
    restaurants
      .integer('userId')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    restaurants
      .integer('restaurantId')
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('visited_restaurant');
};
