'use strict';

/*** imports [begin] ***/

const asyncNanoid = require('nanoid/async'),
	asyncNanoidGenerate = require('nanoid/async/generate');

/*** imports [end] ***/
/*** exports [begin] ***/

async function generateClientID(alphabet, length) {
	switch( true ) {
		case alphabet === undefined:
			return await createClientID();
		case typeof alphabet === 'number':
			return await createClientIDWithLength(alphabet);
		default:
			return await generateClientIDByAlphabetAndWithLength(alphabet, length)
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

async function createClientID() {
	return await asyncNanoid();
}
async function createClientIDWithLength(length) {
	return await asyncNanoid(length);
}
async function generateClientIDByAlphabetAndWithLength(alphabet, length) {
	return await asyncNanoidGenerate(alphabet, length)
}

/*** src [end] ***/

module.exports = generateClientID;