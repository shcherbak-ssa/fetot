'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('../../lib/parse-input-message'),
	getClientIpAddress = require('../../lib/get-client-ip-address'),

	{clientEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function httpConnectionHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	if( !message ) return response.end('Message error');
	
	let clientIP = await getClientIpAddress(request);
	if( !clientIP ) return response.end('message error');
	
	let options = {message, clientIP, response};
	clientEventEmitter.emit('client-connection', options)
}

/*** exports [end] ***/

module.exports = httpConnectionHandler;