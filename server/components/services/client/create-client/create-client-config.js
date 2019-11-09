'use strict';

/*** exports [begin] ***/

const createClientConfig = {
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
			},
			defaultBlock: {
				title: 'I am the first note'
			}
		},
		{
			collectionItem: {
				name: 'lists',
				categories: []
			},
			defaultBlock: {
				title: 'I am the first list'
			}
		}
	]
};

/*** exports [end] ***/

module.exports = createClientConfig;