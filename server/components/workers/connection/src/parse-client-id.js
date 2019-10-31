'use strict';

/*** exports [begin] ***/

async function parseClientID(id) {
	return id.split('/');
}

/*** exports [end] ***/

module.exports = parseClientID;