'use strict';

/*** imports [begin] ***/

const getInputMessage = require('./get-input-message'),
	messageValidation = require('./message-validation');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseInputMessage(request) {
	try {
		let message = await getInputMessage(request);
		return await messageValidation(message, request.headers);
	} catch( err ) {
		console.log(err);
		return false;
	}
}

/*** exports [end] ***/

module.exports = parseInputMessage;