/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (users) => {
    users.increments();

    users.string('firstName').notNullable();
    users.string('lastName').notNullable();
    users.string('username').notNullable();
    users
      .string('email')
      .notNullable()
      .unique();
    users.string('password').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
