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

  function getByCityID(id) {
    return knex('restaurants').where('cityId', id);
  }

  function insert(restaurant) {
    return knex('restaurants')
      .insert(restaurant)
      .then(([id]) => getById(id));
  }

  function getVisited(userId) {
    return knex('restaurants as r')
      .join('visited_restaurant as vr', 'vr.restaurant_id', 'r.id')
      .join('users as u', 'u.id', 'vr.user_id')
      .where('user_id', userId);
  }

  function addVisited(data) {
    return knex('visited_restaurant')
      .insert(data)
      .then(() => getVisited(data.user_id));
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
    getByCityID,
    addVisited,
    getVisited,
  };
};

module.exports = create;
