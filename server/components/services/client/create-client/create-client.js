'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../mongodb');
const config = require('./config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function createClient(options) {
	const {email, password, fullname} = options;
	const clientCollection = MongodbService.createCollection(config.mongodb);
	
	const result = await clientCollection.insertOneDocument(
		getClientTemplate({email, password, config: {fullname, ava: null}})
	);
	
	if( !result ) return setTimeout(createClient, 10000, options);
	
	const clientDatabase = MongodbService.createDatabase(result._id);
	await createModulesCollections(clientDatabase);
}

/*** exports [end] ***/
/*** src [begin] ***/

function getClientTemplate(object) {
	return Object.assign({}, config.client, object);
}
async function createModulesCollections(database) {
	const clientModulesCollection = database.collection('modules');
	
	return Promise.all(config.modules.map( async ({collectionItem, defaultBlock}) => {
		await clientModulesCollection.insertOneDocument(collectionItem);
		
		const currentModuleCollection = database.collection(collectionItem.name);
		await currentModuleCollection.insertOneDocument(defaultBlock);
	}))
}

/*** src [end] ***/

module.exports = createClient;