'use strict';

/*** imports [begin] ***/

const asyncNanoid = require('nanoid/async'),
	asyncNanoidGenerate = require('nanoid/async/generate');

/*** imports [end] ***/
/*** exports [begin] ***/

async function generateID(alphabet, length) {
	switch( true ) {
		case alphabet === undefined:
			return await generateSimpleID();
		case typeof alphabet === 'number':
			return await generateIDWithLength(alphabet);
		default:
			return await generateIDByAlphabetAndWithLength(alphabet, length)
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

async function generateSimpleID() {
	return await asyncNanoid();
}
async function generateIDWithLength(length) {
	return await asyncNanoid(length);
}
async function generateIDByAlphabetAndWithLength(alphabet, length) {
	return await asyncNanoidGenerate(alphabet, length)
}

/*** src [end] ***/

module.exports = generateID;