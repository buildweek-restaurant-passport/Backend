/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('restaurants').insert([
    {
      name: 'Famous Amadeus Pizza',
      country: 'US',
      city: 'New York City',
      cityId: '10004-3333-555',
      type: 'italian',
      description:
				'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
    },
    {
      name: 'Le Coucou',
      country: 'US',
      city: 'New York City',
      cityId: '10004-3333-555',
      type: 'Mexican',
      description:
				"You'll see chefs in tall hats the color of cream, chandeliers sparkling along the length of the ceiling, and a gorgeous bar you can lean against as if you were in Paris. The air here smells of butter, onion, and seared steak. It’s a French restaurant of the old school, which might entail Lyon’s famous quenelle de brochet (ethereally light pike in a creamy lobster bisque) or rabbit cooked three ways. Look for the halibut in beurre blanc, sweetbreads with tarragon, or the divine filet de boeuf with bone marrow.",
    },
    {
      name: 'De place',
      country: 'Nigeria',
      city: 'Lagos, island',
      cityId: '333-111-888',
      type: 'African',
      description:
				'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
    },
    {
      name: 'Mercado Little Spain',
      country: 'Ghana',
      city: 'Ghana',
      cityId: '444-3333-2222',
      type: 'African',
      description:
				'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
    },
  ]);
};
