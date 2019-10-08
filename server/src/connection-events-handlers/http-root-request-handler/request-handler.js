'use strict';

const responseConfig = require('./response-config'),
	{responseEventEmitter} = require('../../server-events-emitters');

/*** exports [begin] ***/

async function httpRootRequestHandler(headers, response) {
	let responseOptions = await parseRequest(headers);
	responseEventEmitter.emit('response-file', responseOptions, response);
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