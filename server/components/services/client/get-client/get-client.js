'use strict';

/*** imports [begin] ***/

const MongodbService = require('../../mongodb');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function getClient(clientOptions) {
	const clientCollection = MongodbService.createCollection({db: 'client', collection: 'client'});
	const client = await clientCollection.findOneDocument(clientOptions);
	
	console.log(client);
	
	return { ...clientOptions };
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = getClient;