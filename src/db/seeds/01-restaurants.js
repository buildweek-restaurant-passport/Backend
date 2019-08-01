/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function(knex, Promise) {
	return knex('restaurants').insert([
		{
			name        : 'Famous Amadeus Pizza',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Italian',
			description :
				'This is the most mouth watering NY Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
		},
		{
			name        : 'Le Coucou',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Mexican',
			description :
				"You'll see chefs in tall hats the color of cream, chandeliers sparkling along the length of the ceiling, and a gorgeous bar you can lean against as if you were in Paris. The air here smells of butter, onion, and seared steak. It’s a French restaurant of the old school, which might entail Lyon’s famous quenelle de brochet (ethereally light pike in a creamy lobster bisque) or rabbit cooked three ways. Look for the halibut in beurre blanc, sweetbreads with tarragon, or the divine filet de boeuf with bone marrow.",
		},
		{
			name        : 'De place',
			country     : 'Nigeria',
			city        : 'Lagos, island',
			cityId      : '333-111-888',
			type        : 'African',
			description :
				'This is the most mouth watering Nigerian Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
		},
		{
			name        : 'Mercado Little Spain',
			country     : 'Ghana',
			city        : 'Ghana',
			cityId      : '444-3333-2222',
			type        : 'African',
			description :
				'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
		},
		{
			name        : 'Big Italy',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Italian',
			description :
				"Have you had our pizza? If you haven't, you haven't truly lived. Come on down and enjoy our delicious pizza.",
		},
		{
			name        : "Enzo's",
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Italian',
			description : "Fine Dining. If someone is going to stand you up at 7pm, you'd want to be here.",
		},
		{
			name        : "Mike's Midnight Mudpies",
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Dessert',
			description :
				"Are you up late craving some dessert? Come down to Mike's Midnight Mudpies, you'll never sleep again.",
		},
		{
			name        : 'IHOPPER',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'American',
			description :
				'Forget IHOP, come try out the more genuine and freshly made IHOPPER. We are known for our Triple-Decker Eggo Extravaganza.',
		},
		{
			name        : 'Alexei',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Russian',
			description : 'We even have russian slurpees.',
		},
		{
			name        : 'Scoops Ahoy',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Dessert',
			description : 'We are famous for our USS Butterscotch.',
		},
		{
			name        : 'MAGNETS',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Souffle',
			description : 'We specify exclusively in souffle.',
		},
		{
			name        : 'Between Strawberry and Cherry',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Fruit',
			description : 'Is there a difference between strawberry and cherry? Come find out.',
		},
		{
			name        : 'Big Italy',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Italian',
			description :
				"Have you had our pizza? If you haven't, you haven't truly lived. Come on down and enjoy our delicious pizza.",
		},
		{
			name        : "Enzo's",
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Italian',
			description : "Fine Dining. If someone is going to stand you up at 7pm, you'd want to be here.",
		},
		{
			name        : "Mike's Midnight Mudpies",
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Dessert',
			description :
				"Are you up late craving some dessert? Come down to Mike's Midnight Mudpies, you'll never sleep again.",
		},
		{
			name        : 'IHOPPER',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'American',
			description :
				'Forget IHOP, come try out the more genuine and freshly made IHOPPER. We are known for our Triple-Decker Eggo Extravaganza.',
		},
		{
			name        : 'Alexei',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Russian',
			description : 'We even have russian slurpees.',
		},
		{
			name        : 'Scoops Ahoy',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Dessert',
			description : 'We are famous for our USS Butterscotch.',
		},
		{
			name        : 'MAGNETS',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Souffle',
			description : 'We specify exclusively in souffle.',
		},
		{
			name        : 'Between Strawberry and Cherry',
			country     : 'US',
			city        : 'New York City',
			cityId      : '10004-3333-555',
			type        : 'Fruit',
			description : 'Is there a difference between strawberry and cherry? Come find out.',
		},
	]);
};
