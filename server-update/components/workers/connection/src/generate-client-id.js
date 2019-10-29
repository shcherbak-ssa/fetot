'use strict';

/*** imports [begin] ***/

const generateID = require('../../../../lib/generate-id');

/*** imports [end] ***/
/*** init [begin] ***/

const appPageCollection = new Set(),
	loginPageCollection = new Set();

/*** init [end] ***/
/*** exports [begin] ***/

async function generateClientIDForLoginPage() {
	let id = await generateID() + 'l';
	return controlIDInCollection(loginPageCollection, id) ? await generateClientIDForLoginPage() : id;
}
async function generateClientIDForAppPage(connectionsCount) {
	let id = await generateID() + connectionsCount + 'a';
	return controlIDInCollection(appPageCollection, id) ? await generateClientIDForAppPage() : id;
}
async function removeIDFromCollection(id) {
	let collectionLabel = id.charAt(id.length - 1);
	collectionLabel === 'l' ? loginPageCollection.delete(id) : appPageCollection.delete(id);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function controlIDInCollection(collection, id) {
	if( collection.has(id) ) return true;
	
	collection.add(id);
	return false;
}

/*** src [end] ***/

module.exports = {
	removeIDFromCollection,
	forLoginPage: generateClientIDForLoginPage,
	forAppPage: generateClientIDForAppPage
};