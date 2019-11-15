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
			},
			defaultBlock: {
				title: 'Test store',
				content: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illum?',
					[
						'Lorem ipsum dolor',
						'Doloribus, eos nam.',
						'Magnam, unde, voluptates.'
					],
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet?'
				],
				info: {
					date: Date.now()
				}
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