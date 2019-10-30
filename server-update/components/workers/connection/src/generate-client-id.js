'use strict';

/*** imports [begin] ***/

const generateID = require('../../../../lib/generate-id');
const parseClientID = require('./parse-client-id');

/*** imports [end] ***/
/*** init [begin] ***/

const appPageCollection = new Set();
const loginPageCollection = new Set();

/*** init [end] ***/
/*** exports [begin] ***/

async function generateClientIDForLoginPage() {
	return generateClientID('/l', loginPageCollection);
}
async function generateClientIDForAppPage() {
	return generateClientID('', appPageCollection);
}
async function removeIDFromCollection(id) {
	let [parsedID, label] = await parseClientID(id);
	label === 'l' ? loginPageCollection.delete(id) : appPageCollection.delete(parsedID);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function generateClientID(label, collection) {
	let id = await generateID() + label;
	return controlIDInCollection(collection, id) ? await generateClientID(label, collection) : id;
}
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