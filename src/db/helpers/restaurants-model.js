/**
 * Restaurants query builder
 *
 * @param {Object} knex
 * @returns {Object} {getAll, getById, insert, update, remove}
 */
const create = (knex) => {
  function getAll() {
    return knex('restaurants');
  }

  function getById(id) {
    return knex('restaurants')
      .where({ id })
      .first();
  }

  function insert(restaurant) {
    return knex('restaurants')
      .insert(restaurant)
      .then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('restaurants')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
  }

  function remove(id) {
    return knex('restaurants')
      .where({ id })
      .del();
  }

  // joke is the model name
  return {
    name: 'Restaurant',
    getById,
    insert,
    update,
    remove,
    getAll,
  };
};

module.exports = create;
