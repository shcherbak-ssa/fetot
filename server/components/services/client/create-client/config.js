'use strict';

/*** exports [begin] ***/

const config = {
	mongodb: { db: 'client', collection: 'client' },
	client: {
		email: '',
		password: '',
		config: {
			fullname: '',
			ava: null
		}
	},
	modules: [
		{
			collectionItem: {
				name: 'notes',
				categories: []
			}
		},
		// {
		// 	collectionItem: {
		// 		name: 'lists',
		// 		categories: []
		// 	}
		// }
	]
};

/*** exports [end] ***/

module.exports = config;