'use strict';

const {rootResponseConfig, fileResponseConfig} = require('./response-config');

/*** export functions [begin] ***/

async function parseRootRequest(cookie) {
	if( !cookie ) return await rootResponseConfig['login']('sing-in');
	
	let [cookieMode, cookieModule] = await getModeFromCookie(cookie);
	return await rootResponseConfig[cookieMode](cookieModule);
}
async function parseFileRequest(url) {
	if( !/^\/[a-z]+\.(js|css)$/i.test(url) ) return error404();
	let [filename, type] = url.slice(1).split('.');
	
	return (type in fileResponseConfig)
		? await fileResponseConfig[type](filename)
		: error404();
}

/*** export functions [end] ***/
/*** work functions [begin] ***/

async function error404() {
	return Promise.reject('404');
}
async function getModeFromCookie(cookie) {
	cookie = await parseCookie(cookie);
	if( 'mode' in cookie ) return cookie.mode.split('/');
	
	return error404();
}
async function parseCookie(cookie) {
	let [key, value] = cookie.split('=');
	if( !/\$fetot/.test(key) ) return error404();
	
	return JSON.parse(value);
}

/*** work functions [end] ***/

module.exports = { parseRootRequest, parseFileRequest };