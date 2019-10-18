'use strict';

/*** imports [begin] ***/

const asyncNanoid = require('nanoid/async'),
	asyncNanoidGenerate = require('nanoid/async/generate');

/*** imports [end] ***/
/*** exports [begin] ***/

async function generateClientId(alphabet, length) {
	switch( true ) {
		case !alphabet:
			return await createClientID();
		case typeof alphabet === 'number':
			return await createIDWithLength(alphabet);
		default:
			return await generateID(alphabet, length)
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

async function createClientID() {
	return await asyncNanoid();
}
async function createIDWithLength(length) {
	return await asyncNanoid(length);
}
async function generateID(alphabet, length) {
	return await asyncNanoidGenerate(alphabet, length)
}

/*** src [end] ***/

module.exports = { generateClientId };