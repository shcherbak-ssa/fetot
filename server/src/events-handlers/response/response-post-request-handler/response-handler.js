'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function responsePostRequestHandler({label, message, response}) {
	let {statusCode, headers} = await responseConfig[label]();
	
	response.writeHead(statusCode, headers);
	response.write(JSON.stringify(message));
	response.end();
}

/*** exports [end] ***/

module.exports = responsePostRequestHandler;