'use strict';

const {sendFile, sendError404} = require('../../lib/send-file'),
	responseConfig = require('./response-config');

/*** exports [begin] ***/

async function httpFileRequestHandler(url, response) {
	let [filename, type] = url.splice(1).split('.'),
		responseOptions = responseConfig[type](filename);
	
	return !responseOptions
		? await sendError404(response)
		: await sendFile(responseOptions, response);
}

/*** exports [end] ***/

module.exports = httpFileRequestHandler;