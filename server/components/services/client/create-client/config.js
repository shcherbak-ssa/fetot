'use strict';

/*** imports [begin] ***/

const generateID = require('../../../../lib/generate-id');

/*** imports [end] ***/
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
				categories_id: generateCategoriesID('notes')
			},
			defaultBlock: {
				title: 'I am the first note'
			}
		},
		{
			collectionItem: {
				name: 'lists',
				categories_id: generateCategoriesID('lists')
			},
			defaultBlock: {
				title: 'I am the first list'
			}
		}
	]
};

/*** exports [end] ***/
/*** src [begin] ***/

function generateCategoriesID(name) {
	return name + generateID.sync('1234567890', 6)
}

/*** src [end] ***/

module.exports = config;