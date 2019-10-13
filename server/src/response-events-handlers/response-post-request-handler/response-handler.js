'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function responsePostRequestHandler({label, message, response}) {
	let {statusCode, headers} = await responseConfig[label]();
	
	response
		.writeHead(statusCode, headers)
		.write(JSON.stringify(message))
		.end();
}

/*** exports [end] ***/

module.exports = responsePostRequestHandler;