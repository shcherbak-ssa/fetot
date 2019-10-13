'use strict';

/*** imports [begin] ***/

const parseInputMessage = require('../../lib/parse-input-message');

/*** imports [end] ***/
/*** imports [end] ***/

async function httpMessageHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
	if( !message ) return response.end('Message error');
	
}

/*** imports [end] ***/

module.exports = httpMessageHandler;