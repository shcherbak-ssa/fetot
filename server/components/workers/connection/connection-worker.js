'use strict';

/*** imports [begin] ***/

const messageValidation = require('./src/message-validation');
const messageParser = require('./src/message-parser');

/*** imports [end] ***/
/*** exports [begin] ***/

async function connectionHandler(options) { // options = { ip, message, response }
	let result = await messageValidation(options.message);
	if( typeof result === 'object' ) return options.response(result);
	
	await messageParser(options);
}

/*** exports [end] ***/

module.exports = { connectionHandler };