/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('restaurants', (restaurants) => {
    restaurants.increments();
    restaurants.string('name').notNullable();
    restaurants.string('country').notNullable();
    restaurants.string('city').notNullable();
    restaurants.string('type').notNullable();
    restaurants.string('description').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('restaurants');
};
