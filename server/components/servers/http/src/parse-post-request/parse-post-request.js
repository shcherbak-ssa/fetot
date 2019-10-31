'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('./parse-input-message');
const sendResponse = require('../send-response');

const connectionWorker = require('../../../../workers/connection');
const getClientIPAddress = require('../../../../../lib/get-client-ip-address');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parsePostRequest(request, response) {
	let message = await parseInputMessage(request);
	if( !message ) return response.end({error: 'invalid message'});
	
	let ip = getClientIPAddress(request);
	let options = await preparingOptions(ip, message, response);
	
	await connectionWorker.connectionHandler(options);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function preparingOptions(ip, message, response) {
	return {
		ip, message,
		response: async (options) => {
			if( options === null ) return response.end();
			await sendResponse(options, response);
		}
	}
}

/*** src [end] ***/

module.exports = parsePostRequest;