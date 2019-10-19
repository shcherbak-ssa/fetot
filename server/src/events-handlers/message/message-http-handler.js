'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('../../../lib/parse-input-message'),
	getClientIpAddress = require('../../../lib/get-client-ip-address'),
	
	{clientEventEmitter} = require('../../server-events-emitters');

/*** imports [end] ***/
/*** imports [end] ***/

async function messageHttpHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	if( !message ) {
		console.log(new Error('invalid input message'));
		return response.end('Message error');
	}
	
	let clientIP = await getClientIpAddress(request);
	if( !clientIP ) return response.end('message error');
	
	clientEventEmitter.emit('client-check-type', {message, clientIP, responseModule: 'http', response});
}

/*** imports [end] ***/

module.exports = messageHttpHandler;