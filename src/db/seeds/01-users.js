/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      city: 'New York City',
      password: '$2a$10$qP6PN9XUVUmi.inzf7N3l.RCftg7k0KnCzM1tzELPIHyNoaKe.CF2',
    },
  ]);
};
