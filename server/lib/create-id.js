'use strict';

/*** imports [begin] ***/

const asyncNanoid = require('nanoid/async');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function createClientID() {
	return await asyncNanoid();
}
async function createIDWithLength(length) {
	return await asyncNanoid(length);
}

/*** exports [end] ***/

module.exports = {
	createClientID,
	createIDWithLength
};