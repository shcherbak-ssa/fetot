'use strict';

/*** imports [begin] ***/

const parseGetRequest = require('./parse-get-request'),
	parsePostRequest = require('./parse-post-request');

/*** imports [end] ***/
/*** exports [begin] ***/

async function requestHandler(request, response) {
	switch( request.method ) {
		case 'GET':
			await parseGetRequest(request, response);
			break;
		case 'POST':
			await parsePostRequest(request, response);
			break;
		default:
			// need to fix
			response.end('Oops!!!')
	}
}

/*** exports [end] ***/

module.exports = requestHandler;