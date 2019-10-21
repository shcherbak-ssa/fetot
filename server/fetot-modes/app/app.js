'use strict';

/*** imports [begin] ***/

const object2mapWorker = require('../../lib/object2map-worker'),
	MongoWorker = require('../../src/workers/mongodb-worker');

/*** imports [end] ***/
/*** init [begin] ***/

const mongodbConfig = {
	db: 'clients',
	collection: 'clients'
};
const testSettings = {
	modules: {
		'notes': {
			icon: '',
			name: 'Notes'
		},
		'lists': {
			icon: '',
			name: 'Lists'
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const appMode = {
	init: initAppMode.bind(this),
	modules: object2mapWorker({}),
	settings: {}
};

/*** exports [end] ***/
/*** src [begin] ***/

async function initAppMode({email, password}) {
	let mongoWorker = await MongoWorker.createCollection(mongodbConfig),
		document = await mongoWorker.findDocument({email, password});
	
	return document ? needToRemove(document.settings) : false;
}
function needToRemove(settings) {
	return Object.assign({}, settings, testSettings)
}

/*** src [end] ***/

module.exports = appMode;