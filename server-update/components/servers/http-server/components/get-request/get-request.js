'use strict';

/*** imports [begin] ***/

const sendResponse = require('../send-response'),
	parseRootRequest = require('./parse-root-request'),
	parseFileRequest = require('./parse-file-request');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseGetRequest(request, response) {
	let options = await parse(request);
	await sendResponse(options, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parse({url, headers}) {
	switch( true ) {
		case url === '/':
			return await parseRootRequest(headers);
		case /\/[-\w]+\.\w{1,5}/i.test(url):
			return await parseFileRequest(url.slice(1));
		default:
			return {error: '404'};
	}
}

/*** src [end] ***/

module.exports = parseGetRequest;