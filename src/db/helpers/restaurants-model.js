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
    return knex
      .select('r.id', 'r.name', 'r.country', 'r.city', 'r.cityId', 'r.type', 'r.description')
      .from('restaurants as r')
      .innerJoin('visited_restaurant as vr', 'vr.restaurantId', 'r.id')
      .where('userId', userId);
  }

  function addVisited(data) {
    return knex('visited_restaurant')
      .insert(data)
      .then(() => getVisited(data.userId));
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

  function removeVisited({ userId, restaurantId }) {
    return knex('visited_restaurant')
      .where({ restaurantId, userId })
      .del()
      .then(count => (count > 0 ? getVisited(userId) : null));
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
    removeVisited,
  };
};

module.exports = create;
