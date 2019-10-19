'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('../../../lib/parse-input-message'),
	getClientIpAddress = require('../../../lib/get-client-ip-address'),

	{clientEventEmitter} = require('../../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function connectionHttpHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	if( !message ) return response.end('Message error');
	
	let clientIP = await getClientIpAddress(request);
	if( !clientIP ) return response.end('message error');
	
	clientEventEmitter.emit('client-connection', {message, clientIP, response})
}

/*** exports [end] ***/

module.exports = connectionHttpHandler;