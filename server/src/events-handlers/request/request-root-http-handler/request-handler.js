'use strict';

/*** imports [begin] ***/

const responseConfig = require('./response-config'),
	{responseEventEmitter} = require('../../../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function requestRootHttpHandler(headers, response) {
	let responseOptions = await parseRequest(headers);
	responseEventEmitter.emit('response-file', responseOptions, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseRequest({cookie}) {
	if( !cookie || /max-age/.test(cookie) ) return await responseConfig.login();
	
	cookie = await parseCookie(cookie);
	if( !cookie || !cookie.client ) return false;
	
	return await responseConfig.app();
}
async function parseCookie(cookie) {
	let [key, value] = cookie.split(';')[0].split('=');
	return key === '$fetot' && value !== '' ? JSON.parse(value) : false;
}

/*** src [end] ***/

module.exports = requestRootHttpHandler;