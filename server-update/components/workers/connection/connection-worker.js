'use strict';

/*** imports [begin] ***/

const messageValidation = require('./src/message-validation');
const messageParser = require('./src/message-parser');

/*** imports [end] ***/
/*** exports [begin] ***/

async function connectionHandler(options) {
	let errors = await messageValidation(options.message);
	if( errors ) {
		console.log(errors);
		return options.response(null);
	}
	
	await messageParser(options);
}

/*** exports [end] ***/

module.exports = { connectionHandler };