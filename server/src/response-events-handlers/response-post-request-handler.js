'use strict';

/*** exports [begin] ***/

async function responsePostRequestHandler(options, response) {
	response.writeHead(options.statusCode, options.headers);
	response.write(JSON.stringify(options.message));
}

/*** exports [end] ***/

module.exports = responsePostRequestHandler;