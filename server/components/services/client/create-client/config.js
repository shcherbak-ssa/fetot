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
				categories: [],
				settings: {
					blocksSizeType: 0,
					blocksCount: 1
				},
				positions: []
			},
			defaultBlock: {
				title: 'How to use',
				content: [
					'pLorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illum?',
					[
						'Lorem ipsum dolor',
						'Doloribus, eos nam.',
						'Magnam, unde, voluptates.'
					],
					'pLorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet?'
				],
				info: {
					date: Date.now()
				}
			}
		}
	]
};

/*** exports [end] ***/

module.exports = config;