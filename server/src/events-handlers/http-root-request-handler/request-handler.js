'use strict';

const {sendFile, sendError404} = require('../../../lib/send-file'),
	responseConfig = require('./response-config');

/*** exports [begin] ***/

async function httpRootRequestHandler(headers, response) {
	let responseOptions = await parseRequest(headers);
	if( !responseOptions ) return await sendError404(response);
	
	await sendFile(responseOptions, response);
}

/*** exports [end] ***/

async function parseRequest({cookie}) {
	if( !cookie ) return await responseConfig.login();
	
	cookie = parseCookie(cookie);
	if( !cookie || !cookie.client ) return false;
	
	return await responseConfig.app();
}
async function parseCookie(cookie) {
	let [key, value] = cookie.split('=');
	if( !/\$fetot/.test(key) ) return false;
	
	return JSON.parse(value);
}

module.exports = httpRootRequestHandler;