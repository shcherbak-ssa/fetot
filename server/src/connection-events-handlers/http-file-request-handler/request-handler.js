'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config'),
	{responseEventEmitter} = require('../../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function httpFileRequestHandler(url, response) {
	let [filename, type] = url.slice(1).split('.'),
		responseOptions = await responseConfig[type](filename);
	
	responseEventEmitter.emit('response-file', responseOptions, response);
}

/*** exports [end] ***/

module.exports = httpFileRequestHandler;