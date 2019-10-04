'use strict';

const {sendFile, sendError404} = require('./src/send'),
	{parseRootRequest, parseFileRequest} = require('./src/parse');

/*** export functions [begin] ***/

async function getRequestParse(request, response) {
	try {
		let options = await parse(request);
		if( !options ) return await sendError404(response);
		
		await sendFile(options, response);
	} catch( err ) {
		if( typeof err === 'string' ) return await sendError404(response);
		console.log(err)
	}
}

/*** export functions [end] ***/
/*** work functions [begin] ***/

async function parse(request) {
	let {url} = request;
	if( /[^a-z0-9./]/i.test(url) ) return Promise.reject('error404');
	
	let {cookie} = request.headers;
	return (url === '/') ? parseRootRequest(cookie) : parseFileRequest(url);
}

/*** work functions [end] ***/

module.exports = getRequestParse;