'use strict';

const {sendFile, sendError404} = require('./src/send'),
	{rootResponse, fileResponse} = require('./src/response');

/*** export function [begin] ***/

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

/*** export function [end] ***/
/*** work functions [begin] ***/

async function parse(request) {
	let {url} = request;
	if( /[^a-z0-9./]/i.test(url) ) return Promise.reject('404');
	
	let {cookie} = request.headers;
	return (url === '/') ? await parseRootRequest(cookie) : await parseFileRequest(url);
}
async function parseRootRequest(cookie) {
	if( !cookie ) return await rootResponse.login();
	
	cookie = await parseCookie(cookie);
	if( !cookie || !cookie.client ) return false;
	
	return await rootResponse.app();
}
async function parseFileRequest(url) {
	if( !/^\/[a-z]+\.(js|css)$/i.test(url) ) return false;
	let [filename, type] = url.slice(1).split('.');
	
	return (type in fileResponse) ? await fileResponse[type](filename) : false;
}
async function parseCookie(cookie) {
	let [key, value] = cookie.split('=');
	if( !/\$fetot/.test(key) ) return false;
	
	return JSON.parse(value);
}

/*** work functions [end] ***/

module.exports = getRequestParse;