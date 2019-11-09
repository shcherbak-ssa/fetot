'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../mongodb');
const createClientConfig = require('./create-client-config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function createClient(options) {
	const {email, password, fullname} = options;
	const clientCollection = MongodbService.createCollection(createClientConfig.mongodb);
	
	const result = await clientCollection.insertOneDocument(
		getClientTemplate({email, password, config: {fullname}})
	);
	console.log(result);
	
	if( !result ) return setTimeout(createClient, 10000, options);
	
	const clientDatabase = MongodbService.createDatabase(result._id);
	await createModulesCollections(clientDatabase);
}

/*** exports [end] ***/
/*** src [begin] ***/

function getClientTemplate(object) {
	return Object.assign({}, createClientConfig.client, object);
}
async function createModulesCollections(database) {
	const clientModulesCollection = database.collection('modules');
	
	return Promise.all(createClientConfig.modules.map( async ({collectionItem, defaultBlock}) => {
		let result = await clientModulesCollection.insertOneDocument(collectionItem);
		console.log(result);
		
		const currentModuleCollection = database.collection(collectionItem.name);
		result = await  currentModuleCollection.insertOneDocument(defaultBlock);
		console.log(result);
	}))
}

/*** src [end] ***/

module.exports = createClient;