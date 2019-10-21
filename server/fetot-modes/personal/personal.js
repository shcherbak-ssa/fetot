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
const testConfig = {
	modules: [
		{
			name: 'Notes',
			info: [
				{
					icon: '&#xE820;',
					count: 0,
					title: 'Notes count'
				},
				{
					icon: '&#xF292;',
					count: 1,
					title: 'Categories count'
				}
			]
		},
		{
			name: 'Lists',
			info: [
				{
					icon: '&#xE81F;',
					count: 0,
					title: 'Lists count'
				},
				{
					icon: '&#xF292;',
					count: 1,
					title: 'Categories count'
				}
			]
		}
	]
};

/*** init [end] ***/
/*** exports [begin] ***/

const appMode = {
	init: initAppMode.bind(this),
	modules: object2mapWorker({}),
	config: {}
};

/*** exports [end] ***/
/*** src [begin] ***/

async function initAppMode({email, password}) {
	let mongoWorker = await MongoWorker.createCollection(mongodbConfig),
		document = await mongoWorker.findDocument({email, password});
	
	return document ? needToRemove(document.config, email) : false;
}
function needToRemove(config, email) {
	return Object.assign({email}, config, testConfig)
}

/*** src [end] ***/

module.exports = appMode;