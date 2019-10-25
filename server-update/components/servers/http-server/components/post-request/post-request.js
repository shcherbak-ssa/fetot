'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('./parse-input-message'),
	preparingOptions = require('./preparing-options');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parsePostRequest(request, response) {
	let message = await parseInputMessage(request);
	if( !message ) return response.end({error: 'invalid message'});
	
	let options = await preparingOptions(message, response);
	console.log(options);
}

/*** exports [end] ***/

module.exports = parsePostRequest;