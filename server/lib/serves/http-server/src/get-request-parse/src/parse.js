'use strict';

const {rootResponse, fileResponse} = require('./response');

/*** export functions [begin] ***/

async function parseRootRequest(cookie) {
	if( !cookie ) return await rootResponse.login();
	
	cookie = await parseCookie(cookie);
	if( !cookie || !cookie.client ) return false;
	
	return await rootResponse.app();
}
async function parseFileRequest(url) {
	if( !/^\/[a-z]+\.(js|css)$/i.test(url) ) return false;
	let [filename, type] = url.slice(1).split('.');
	
	return (type in fileResponse)
		? await fileResponse[type](filename)
		: false;
}

/*** export functions [end] ***/
/*** work functions [begin] ***/

async function parseCookie(cookie) {
	let [key, value] = cookie.split('=');
	if( !/\$fetot/.test(key) ) return false;
	
	return JSON.parse(value);
}

/*** work functions [end] ***/

module.exports = { parseRootRequest, parseFileRequest };