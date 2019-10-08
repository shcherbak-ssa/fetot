'use strict';

/*** exports [begin] ***/

async function responsePostRequestHandler({statusCode, headers, message}, response) {
	response
		.writeHead(statusCode, headers)
		.write(JSON.stringify(message))
		.end();
}

/*** exports [end] ***/

module.exports = responsePostRequestHandler;