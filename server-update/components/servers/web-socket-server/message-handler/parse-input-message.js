'use strict';

/*** exports [begin] ***/

async function parseInputMessage(message) {
	try {
		return JSON.parse(message);
	} catch( err ) {
		console.log(err);
		return false;
	}
}

/*** exports [end] ***/

module.exports = parseInputMessage;