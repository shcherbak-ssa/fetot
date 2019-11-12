'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../mongodb');
const preparingResponse = require('./preparing-response');

/*** imports [end] ***/
/*** exports [begin] ***/

async function getClient(clientOptions) {
	/* find current client */
	const clientCollection = MongodbService.createCollection({db: 'client', collection: 'client'});
	const client = await clientCollection.findOneDocument(clientOptions);
	
	if( !client ) return false; // if didn't find => return false;
	
	/* set client config to response */
	const currentPreparingResponse = preparingResponse.create();
	await currentPreparingResponse.setClientConfig(client.config);
	
	/* create current client database by found client id */
	const currentClientDatabase = MongodbService.createDatabase(client._id);
	
	/* preparing current client modules */
	const currentClientModulesCollection = currentClientDatabase.collection('modules');
	const currentClientModules = await currentClientModulesCollection.findAllDocuments();
	
	/* set current client modules */
	await currentPreparingResponse.setClientModules(currentClientModules);
	return [ currentPreparingResponse.response, client._id ];
}

/*** exports [end] ***/

module.exports = getClient;