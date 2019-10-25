'use strict';

/*** imports [begin] ***/

const rootResponseConfig = require('./root-response-config'),
	parseCookie = require('./parse-cookie');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseRootRequest(headers) {
	let {cookie} = headers;
	if( !cookie ) return rootResponseConfig.login;
	
	cookie = await parseCookie(cookie);
	if( !cookie || !cookie.client ) return {error: '404'};
	
	return rootResponseConfig.app;
}

/*** exports [end] ***/

module.exports = parseRootRequest;