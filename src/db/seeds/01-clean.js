/* eslint-disable func-names */
const knexCleaner = require('knex-cleaner');

exports.seed = function (knex) {
  return knexCleaner.clean(knex);
};
