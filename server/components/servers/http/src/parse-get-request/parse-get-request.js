'use strict';

/*** imports [begin] ***/

const sendResponse = require('../send-response'),
	isRootRequest = require('./is-root-request'),
	isFileRequest = require('./is-file-request'),

	{serverEvents} = require('../../../../server-events');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseGetRequest(request, response) {
	let options = await parse(request);
	if( typeof options === 'string' && options === 'event-source' )
		return serverEvents.emit('connection-event-source', request.url, response);
	
	await sendResponse(options, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parse({url, headers}) {
	switch( true ) {
		case url === '/':
			return await isRootRequest(headers);
		case /\/[-\w]+\.\w{1,5}/i.test(url):
			return await isFileRequest(url.slice(1));
		case /\/event-source\.\w{21}/i.test(url):
			return {'event-source': true, url};
		default:
			return {error: '404'};
	}
}

/*** src [end] ***/

module.exports = parseGetRequest;