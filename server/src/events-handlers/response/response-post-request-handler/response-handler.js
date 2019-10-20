'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function responsePostRequestHandler({message, response, type = 'common'}) {
	let {statusCode, headers} = await responseConfig[type]();
	
	response.writeHead(statusCode, headers);
	response.write(JSON.stringify(message));
	response.end();
}

/*** exports [end] ***/

module.exports = responsePostRequestHandler;